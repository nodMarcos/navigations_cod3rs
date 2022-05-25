import TextoCentral from '../components/TextoCentral';

export default props => {
  const r = props.route 
  const num = r && r.params && r.params.num ? props.route.params.num : 0
  return (
    <TextoCentral corFundo='#9932cd'>
      Tela C - {num}
    </TextoCentral>
  )
}