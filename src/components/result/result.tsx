import { formsGetData, useForms } from '@/hooks/useForms';

export default function Result() {
  const data = useForms(formsGetData);

  return (
    <div className="flex flex-col gap-4 mt-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-5 bg-neutral-700 rounded-md w-96 text-color-olive"
        >
          <div className="flex gap-4 items-center border-b border-color-olive mb-4 pb-4">
            {typeof item.file === 'string' && (
              <img
                src={item.file}
                alt={`Image of ${item.name}`}
                className="w-[50px] h-[50px] rounded-md"
              />
            )}
            <h2 className="text-2xl font-bold">{item.name}</h2>
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
