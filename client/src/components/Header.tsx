export interface Props {
    title: string
}
const Header = (props: Props) =>{
    return (
        <div>
          <h1 className="font-weight-normal display-1 text-center">
            {props.title}
          </h1>
        </div>
      );
    };

export default Header 