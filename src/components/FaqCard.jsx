import { useRef, useState } from "react"

const FaqCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-4 overflow-hidden"
            key={idx}
            onClick={handleOpenAnswer}
            data-aos="fade-up"        
            >
            <h2 data-aos="fade-up" className="cursor-pointer p-5 rounded-md flex items-center bg-[#2C2C2C] text-[18px] text-white font-medium">
                {

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        fill="none"
                        className={`${state ? 'rotate-90' : ''} mr-3 transition-transform duration-300 ease-linear`}

                    >
                        <path
                            d="M15.0215 7.86196C15.3548 8.05441 15.3548 8.53554 15.0215 8.72799L1.52149 16.5222C1.18815 16.7147 0.771485 16.4741 0.771485 16.0892L0.771485 0.500746C0.771485 0.115846 1.18815 -0.124718 1.52149 0.0677325L15.0215 7.86196Z"
                            fill="#F76100"
                        />
                    </svg>

                }
                {faqsList.q}

            </h2>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    <p className="text-gray-100 p-2">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default FaqCard;