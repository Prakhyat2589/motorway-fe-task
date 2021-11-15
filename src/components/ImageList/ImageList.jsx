import React, { useEffect, useState } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import Canvas from "../../helper/Canvas";
import {
  Wrapper,
  ImageElement,
  Hover,
  HoverList,
  HoverArrow,
  PopupContent,
  PopupImage,
  CloseButton,
  StyledPopup,
  Button,
} from "./ImageList.style";

const ImageList = () => {
  const [images, setImages] = useState();

  /**
   * There are many reasons to use axios over fetch but the few are:
   * Axios performs automatic transform of JSON data
   * Axios code is clean and easy to understand during chain request
   * Axios has wide browser support
   */
  const fetchData = async () => {
    try {
      const fetchURL = await axios.get("images?limit=10");
      const response = fetchURL.data;
      setImages(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LazyLoad height={100} once>
      <Link to={{ pathname: "/generalform" }}>
        <Button> Proceed to Form</Button>
      </Link>
      <Hover>
        <h2>Hover {"&"} Click the card</h2>
        <HoverList>
          <HoverArrow> {"<<<"} </HoverArrow>
          <HoverArrow> {">>>"} </HoverArrow>
        </HoverList>
      </Hover>

      <Wrapper>
        {images &&
          images.map((img) => (
            <React.Fragment key={img.id}>
              <ImageElement>
                <StyledPopup
                  trigger={
                    /**
                     * Calling Image will decrease the performance of
                     * the site since the .jpg images are greater than 800Kb.
                     */
                    // <Image src={`${img.url}.jpg`} alt="" />

                    /**
                     * Therefore, images are converted to canvas so that performance of the
                     * site can be optimised as it takes lesser time for canvas to load
                     */
                    <Canvas canvasimage={`${img.url}.jpg`} />
                  }
                  position="center center"
                  modal
                  nested
                >
                  {(close) => (
                    <PopupContent>
                      <CloseButton onClick={close}>&times;</CloseButton>
                      <PopupImage
                        src={`${img.url}.jpg`}
                        alt={img.alt_description}
                      />
                    </PopupContent>
                  )}
                </StyledPopup>
              </ImageElement>
              <ImageElement>
                <StyledPopup
                  trigger={
                    // <Image src={`${img.user.profile_image}.webp`} alt="" />
                    <Canvas canvasimage={`${img.user.profile_image}.webp`} />
                  }
                  position="center center"
                  modal
                  nested
                >
                  {(close) => (
                    <PopupContent>
                      <CloseButton onClick={close}>&times;</CloseButton>
                      <PopupImage
                        src={`${img.user.profile_image}.webp`}
                        alt={img.alt_description}
                      />
                    </PopupContent>
                  )}
                </StyledPopup>
              </ImageElement>
            </React.Fragment>
          ))}
      </Wrapper>
    </LazyLoad>
  );
};

export default ImageList;
