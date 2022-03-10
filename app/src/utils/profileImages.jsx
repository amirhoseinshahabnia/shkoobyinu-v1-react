const URLs=[
    "https://lh3.googleusercontent.com/mhT0yQwMdrlm_rS8RFX56kaGIvRkBh0Z9N2FbYL04E-xPFqbjr-c5Hl2WB9N-ozSDSD2QRs2TenAC-xMyWmQ4MU1gJ1MTMLs3ab59b0=w600",
    "https://lh3.googleusercontent.com/mhT0yQwMdrlm_rS8RFX56kaGIvRkBh0Z9N2FbYL04E-xPFqbjr-c5Hl2WB9N-ozSDSD2QRs2TenAC-xMyWmQ4MU1gJ1MTMLs3ab59b0=w600",
]

const image = URLs[[Math.floor(Math.random()*URLs.length)]]

const ProfileImage = ({width, rounded}) => {
    return (
        <img width={width} src={image} className={rounded ? "rounded-full" : "none"}></img>
    )
}

export default ProfileImage;