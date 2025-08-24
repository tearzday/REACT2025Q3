import { formsGetData, useForms } from '../../hooks/useForms';

export default function Result() {
  const data = useForms(formsGetData);

  return (
    <div className="flex flex-col gap-4 mt-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-5 bg-neutral-700 rounded-md w-96 text-color-olive"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-color-olive pb-5">
              {item.name}
            </h2>
          </div>

          <div className="text-l">
            <p>Email: {item.email}</p>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
            <p>Country: {item.country}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
