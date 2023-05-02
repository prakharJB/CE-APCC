
function Objectives (props) {
    return (
      <div className={`bg-color-card object cardbox bg-[#DDF3EA] rounded-xl p-8 ${props.className}`}>
        <div className="flex items-center">
          {props.children}
        </div>
        <div>
          <p className="objective-paragraph text-xl leading-[30px] sm:leading-[54px]">{props.text}</p>
        </div>
      </div>
    )
  }
  
  export default Objectives;