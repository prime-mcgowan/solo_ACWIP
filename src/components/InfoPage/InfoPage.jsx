import React, { useState } from 'react';


function InfoPage() {

  const[showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
<div>
  <h1 onClick={handleClick} style={{textAlign:'center',fontSize:100}}>Vonnegut Solo Project</h1>
  {showImage && <img src="./images/acwip.png" style={{marginTop:100, display: "block", margin: "auto"}}/>}
</div>
  );
}

export default InfoPage;
