"use client"
import io from 'socket.io-client';
import Peer from 'simple-peer';
import { useContext, useEffect, useRef, useState } from "react"
import { Button, Input, FormLabel, Heading, Grid, Box, Container, FormControl } from "@chakra-ui/react"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiClipboard, BiPhoneCall, BiPhoneOff } from "react-icons/bi";
import { ChakraProvider } from '@chakra-ui/react';

const socket = io('http://localhost:2000', {});
const Video_App = () => {
    const [idToCall, setIdToCall] = useState('');
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [me, setMe] = useState('');
    const myVideo = useRef(null);
    const userVideo = useRef(null);
    const connectionRef = useRef();

    useEffect(() => {
        const getmedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                setStream(stream);
                myVideo.current.srcObject = stream;

            }
            catch(error) {
                console.log(error)
            }
        }
        getmedia()
        socket.on('me', (id) => {
            setMe(id)
        });
        socket.on('callUser', ({ from, name: callerName, signal }) => {
            console.log(me)
            setCall({ isReceivingCall: true, from, name: callerName, signal });
        });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({ initiator: false, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('answerCall', { signal: data, to: call.from });
        });
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });
        peer.signal(call.signal);
        connectionRef.current = peer;
    };

    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
        });
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });
        socket.on('callAccepted', (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });
        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();
    };

    return (
        <ChakraProvider>
            <div>
                <Grid justifyContent="center" templateColumns='repeat(2, 1fr)' mt="12">
                    {/* my video */}
                    {
                        stream && (
                            <Box>
                                <Grid colSpan={1}>
                                    <Heading as="h5">
                                        {name || 'Name'}
                                    </Heading>
                                    <video playsInline muted ref={myVideo} autoPlay width="600" />
                                </Grid>
                            </Box>
                        )
                    }
                    {/* user's video */}
                    {
                        callAccepted && !callEnded && (
                            <Box>
                                <Grid colSpan={1}>
                                    <Heading as="h5">
                                        {call.name || 'Name'}
                                    </Heading>
                                    <video playsInline ref={userVideo} autoPlay width="600" />
                                </Grid>
                            </Box>
                        )
                    }

                </Grid>
                <Container maxW="1200px" m="35px 0" p="0">
                    <Box p="10px" border="2px" borderColor="black" borderStyle="solid">
                        <FormControl display="flex" flexDirection="column" noValidate aria-autocomplete="none">
                            <Grid templateColumns='repeat(2, 1fr)' mt="12">
                                <Grid colSpan={1} p="6">
                                    <Heading as="h6"> Account Info </Heading>
                                    <FormLabel>Username</FormLabel>
                                    <Input type='text' value={name} onChange={(e) => setName(e.target.value)} width="100%" />
                                    <CopyToClipboard text={me} mt="20">
                                        <Button leftIcon={<BiClipboard />} colorScheme='teal' variant='solid'>
                                            Copy ID
                                        </Button>
                                    </CopyToClipboard>
                                </Grid>
                                <Grid colSpan={1} p="6">
                                    <Heading as="h6"> Make a Call </Heading>
                                    <FormLabel> User id to call </FormLabel>
                                    <Input type='text' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} width="100%" />
                                    {
                                        callAccepted && !callEnded ? (
                                            <Button leftIcon={<BiPhoneOff />} onClick={leaveCall} mt="20" colorScheme='teal' variant='info'>
                                                Hang up
                                            </Button>
                                        ) : (
                                            <Button leftIcon={<BiPhoneCall />} onClick={() => callUser(idToCall)} mt="20" colorScheme='teal' variant='solid'>
                                                Call
                                            </Button>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Box>
                </Container>

                {call.isReceivingCall && !callAccepted && (
                    <Box display="flex" justifyContent="space-around" mb="20">
                        <Heading as="h3"> {call.name} is calling </Heading>
                        <Button variant="outline" onClick={answerCall} border="1px" borderStyle="solid" borderColor="black">
                            Answer Call
                        </Button>
                    </Box>
                )}
            </div>
        </ChakraProvider>
    );
}

export default Video_App;