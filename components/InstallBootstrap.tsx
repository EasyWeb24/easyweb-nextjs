'use client'

import { useEffect } from "react";


const InstallBootstrap = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

  return (
    <></>
  )
}

export default InstallBootstrap