import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack direction="column" spacing={3} alignItems="center" justify="space-around">
        <img
          src="../public/firstImage.jpeg"
          style={{ maxWidth: "80%", margin: "auto", marginTop: "3%" }}
        />
        <Typography variant="h5" color="white">A gateway of endless knowledge</Typography>
        <Typography variant="h6" color="white">A site dedicated to the work done as a <span style={{color:"red"}}>user</span> by Allan Chassanoff in the <span style={{color:"skyblue"}}>Read and Note</span> Platform</Typography>
      </Stack>
    </>
  );
}
