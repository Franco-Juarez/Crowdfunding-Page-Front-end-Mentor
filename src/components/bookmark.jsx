const Bookmark = ({circleFill, pathFill}) => (
    <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill={circleFill} cx={28} cy={28} r={28} />
        <path fill={pathFill} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  )
  
  export default Bookmark;