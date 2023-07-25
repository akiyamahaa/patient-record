import { Box, Button } from '@mui/material';
import React from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { useNavigate, useParams } from 'react-router-dom';

const Record = () => {
  let { userId } = useParams();
  console.log("🚀 ~ file: Record.js:8 ~ Record ~ userId:", userId)
  const navigate = useNavigate()
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    console.log()
  };

  const onHandleResultPage = () => {
    navigate(`/result/${userId}`)
  }
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box>
        <h1>
          Record
        </h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
          // downloadOnSavePress={true}
          // downloadFileExtension="mp3"
          showVisualizer={true}
        />
        <button onClick={recorderControls.stopRecording} style={{ marginLeft: 24 }}>Stop recording</button>
      </Box>
      <Box>
        <Button onClick={onHandleResultPage}>
          Check Result
        </Button>
      </Box>
    </Box>
  )
}

export default Record