const ListItem = (props) => {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer noopener"
        className={props.className}
      >
        {props.children}
      </a>
    </li>
  )
};

export default ListItem;