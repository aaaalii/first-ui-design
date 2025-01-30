export default function Icon({icon, border = false, dot = false}){
  let classes = (border ?  'border ' : '') + (dot ? 'icon-container-dot' : 'icon-container');
  let width = border ? '22.11px' : '40px';
  let height = border ? '23.04px' : '40px';
  return (
    <>
      <div className={classes}>
        { dot ? <div className="dot"></div> : null }
        <img alt="" src={icon} width={width} height={height}/>
      </div>
    </>
  );
}