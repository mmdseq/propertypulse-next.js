// "use client"
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   EmailShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   WhatsappIcon,
//   EmailIcon,
// } from "react-share"

// const ShareButtons = ({ property }) => {
//   const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`

//   return (
//     <>
//       <h3 className="text-xl font-bold text-center pt-2">
//         Share This Property:
//       </h3>
//       <div className="flex gap-3 justify-center pb-5">
//         <FacebookShareButton
//           url={shareUrl}
//           quote={property.name}
//           hashtag={`#${property.type.replace(/\s/g, "")}ForRent`}
//         >
//           <FacebookIcon size={40} round={true} />
//         </FacebookShareButton>

//         <TwitterShareButton
//           url={shareUrl}
//           title={property.name}
//           hashtags={[`${property.type.replace(/\s/g, "")}ForRent`]}
//         >
//           <TwitterIcon size={40} round={true} />
//         </TwitterShareButton>

//         <WhatsappShareButton
//           url={shareUrl}
//           title={property.name}
//           separator=":: "
//         >
//           <WhatsappIcon size={40} round={true} />
//         </WhatsappShareButton>

//         <EmailShareButton
//           url={shareUrl}
//           subject={property.name}
//           body={`Check out this property listing: ${shareUrl}`}
//         >
//           <EmailIcon size={40} round={true} />
//         </EmailShareButton>
//       </div>
//     </>
//   )
// }
// export default ShareButtons

// "use client"

// const ShareButtons = ({ property }) => {
//   const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`
//   const shareText = `Check out this property: ${property.name}`
//   const hashtag = `${property.type.replace(/\s/g, "")}ForRent`

//   return (
//     <div style={{ textAlign: "center", padding: "10px" }}>
//       <h3>Share This Property:</h3>
//       <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
//         <button
//           onClick={() =>
//             window.open(
//               `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
//               "_blank"
//             )
//           }
//         >
//           Facebook
//         </button>

//         <button
//           onClick={() =>
//             window.open(
//               `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}&hashtags=${hashtag}`,
//               "_blank"
//             )
//           }
//         >
//           Twitter
//         </button>

//         <button
//           onClick={() =>
//             window.open(
//               `https://wa.me/?text=${shareText}%20${shareUrl}`,
//               "_blank"
//             )
//           }
//         >
//           WhatsApp
//         </button>

//         <button
//           onClick={() =>
//             (window.location.href = `mailto:?subject=${shareText}&body=${shareText} ${shareUrl}`)
//           }
//         >
//           Email
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ShareButtons

"use client"

import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa"

const ShareButtons = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`
  const shareText = `Check out this property: ${property.name}`
  const hashtag = `${property.type.replace(/\s/g, "")}ForRent`

  const handleShare = (url) => {
    window.open(url, "_blank")
  }

  return (
    <div className="text-center p-4">
      <h3 className="text-lg font-bold mb-4">Share This Property:</h3>
      <div className="flex justify-center gap-4">
        <button
          onClick={() =>
            handleShare(
              `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
            )
          }
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          <FaFacebook className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            handleShare(
              `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}&hashtags=${hashtag}`
            )
          }
          className="p-3 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition"
        >
          <FaTwitter className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            handleShare(`https://wa.me/?text=${shareText}%20${shareUrl}`)
          }
          className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          <FaWhatsapp className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            handleShare(
              `https://t.me/share/url?url=${shareUrl}&text=${shareText}`
            )
          }
          className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          <FaTelegram className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            (window.location.href = `mailto:?subject=${shareText}&body=${shareText} ${shareUrl}`)
          }
          className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
        >
          <FaEnvelope className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default ShareButtons
