import '../styles/About.css'
import banner from '../images/aboutpagebanner.jpg'

const About = () => {
    return (
        <div className='aboutpagewrapper'>
            <div className='aboutbanner'>
                <img src={banner}></img>
                <p>About This Blog</p>
            </div>
            <div className='about-content'>
                <div className='whatblog'>
                    <h3>What is this blog?</h3>
                    <p>This blog is a true crime blog, where there are articles about cases researched as a hobby.

                        Suspendisse accumsan gravida nisi egestas pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className='whyblog'>
                    <h3>Why is this blog?</h3>
                    <p>This blog can help spread information about true crime cases, which is always helpful. A case just needs to reach one person who might know someone to help a case.</p>
                </div>
            </div>
        </div>
    )
}

export default About