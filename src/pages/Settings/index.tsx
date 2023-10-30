import SectionHeading from '../../components/Headings/SectionHeading'
import { useAppSelector } from '../../hooks/useAppSelector'

const Settings = () => {
  const data = useAppSelector((state) => state.me.data)
  console.log(data);
  return (
    <>
      <SectionHeading title={"Settings"} />
      <ul>
        <li>{data.username}</li>
        <li>{data.region}</li>
        <li>{data.phone_number}</li>
      </ul>
    </>
  )
}

export default Settings