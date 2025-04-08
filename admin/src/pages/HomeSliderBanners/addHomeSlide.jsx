import React from "react";
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
const AddHomeSlide = () => {
    return (
        <section className="p-5 bg-gray-50">
            <form className="form py-1 p-1 md:p-8 md:py-1">
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                        <div className="uploadBoxWrapper relative">
                            <span className="absolute w-[20px] h-[20px] rounded-full  overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                                <IoMdClose className="text-white text-[17px]" />
                            </span>
                            <div className="uploadBox p-3 
                                                        rounded-md overflow-hidden 
                                                        border border-dashed border-[rgba(0,0,0,0.3)] 
                                                        h-[150px] w-[100%] bg-gray-100 cursor-pointer
                                                         hover:bg-gray-200 flex items-center justify-center flex-col relative"
                            >
                                <LazyLoadImage
                                    className="w-full h-full object-cover"
                                    alt={"image"}
                                    effect="blur"
                                    src={"https://serviceapi.spicezgold.com/download/1742463984453_protinex-powder-creamy-vanilla-flavour-jar-400-gm-prod-o1091133-p608300882-0-202403020216.webp"}
                                />
                            </div>
                        </div>
                        <UploadBox multiple={false} />
                    </div>
                    <br />
                    <br />
                    <div className="w-[250px]">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="btn-blue btn-lg w-full flex gap-2"
                        >
                            <FaCloudUploadAlt className="text-[25px] text-white" />Publish and View
                        </Button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AddHomeSlide;