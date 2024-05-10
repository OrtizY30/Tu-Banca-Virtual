import { AppBar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <Stack
      maxWidth={"lg"}
      m={"0 auto"}
      height={"130px"}
      alignItems={"center"}
      direction={"row"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Box
          width={"60px"}
          height={"60px"}
          sx={{ bgcolor: "#6A80F7", borderRadius: 4, p: 1 }}
        >
          <Typography
            variant="h4"
            textTransform={"capitalize"}
            textAlign={"center"}
            fontWeight={900}
            color={"white"}
          >
            Bv
          </Typography>
        </Box>
        <Typography
          fontWeight={460}
          variant="h4"
          color={"#6A80F7"}
          sx={{ ml: 1 }}
        >
          Banca Virtual
        </Typography>
      </Stack>

      <Box>
        <Nav />
      </Box>
    </Stack>
  );
};

export default Header;
