import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import style from './Usercard.module.css';

function Usercard({id, name, title, image, quote, handleNextUserBtn, handlePrevUserBtn}){
    return(
        <div className={style.userReviewCard}>
            <section className="userImageContainer">
                <img className={style.userImage} src={image} alt={name}/>
            </section>
            <section className={style.middlePanel}>
                <button className={style.prevUserBtn} onClick={handlePrevUserBtn}>
                    <FaAngleLeft />
                </button>
                <section className={style.userDetails}>
                    <h2 className={style.userName}>{name}</h2>
                    <h3 className={style.userJob}>{title}</h3>
                </section>
                <button className={style.nextUserBtn} onClick={handleNextUserBtn}>
                    <FaAngleRight />
                </button>
            </section>
            <section className="userQuoteContainer">
                <p className={style.userQuote}>{quote}</p>
            </section>
            <section className={style.quoteMarksContainer}>
                <BiSolidQuoteSingleRight className={style.quoteMarks}/>
                <BiSolidQuoteSingleRight className={style.quoteMarks}/>
            </section>
        </div>
    );
}
export default Usercard;