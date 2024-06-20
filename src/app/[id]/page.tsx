export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <section>
      <h1 className="text-3xl font-extrabold py-3">Challenge #{id}</h1>
      <p className="text-md font-bold py-1">Level: Junior</p>
      <p className="text-md font-bold py-1">Technologies: </p>
      <p className="text-md font-bold py-1">Description: </p>
      <ul className="list-disc">
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quibusdam voluptate hic, consequuntur explicabo saepe officia aliquam corporis, numquam cumque ducimus quos dolorum placeat reprehenderit soluta voluptates quae quaerat illum.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quibusdam voluptate hic, consequuntur explicabo saepe officia aliquam corporis, numquam cumque ducimus quos dolorum placeat reprehenderit soluta voluptates quae quaerat illum.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quibusdam voluptate hic, consequuntur explicabo saepe officia aliquam corporis, numquam cumque ducimus quos dolorum placeat reprehenderit soluta voluptates quae quaerat illum.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quibusdam voluptate hic, consequuntur explicabo saepe officia aliquam corporis, numquam cumque ducimus quos dolorum placeat reprehenderit soluta voluptates quae quaerat illum.</li>
      </ul>
    </section>
  )
}