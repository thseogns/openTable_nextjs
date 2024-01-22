const Header = ({ name }: { name: string }) => {
  const renderTitle = () => {
    const nameArray = name.split("-"); // 하이픈 기준으로 배열을 나눈다.

    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`; // 배열의 마지막 번째 값을 배열 마지막 번째 값에 괄호를 더한 것 으로 바꾼다

    return nameArray.join(" "); //배열을 합쳐서 리턴
  };
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
};

export default Header;
