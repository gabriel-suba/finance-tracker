const columnDefinition = [
  // create custom hook for checkbox
  {
    accessorKey: "delete",
    header: "Delete",
    cell: (props) => (
      <div>
        <input type="checkbox" name="" id="" defaultChecked={props.getValue()} />
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "documentNumber",
    header: "Document Number",
    cell: (props) => <div className="text-slate-500">{props.getValue()}</div>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (props) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "account",
    header: "Account",
    cell: (props) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "from",
    header: "From",
    cell: (props) => <div>{props.getValue() || "-None-"}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: (props) => <div>{props.getValue().toLocaleDateString()}</div>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (props) => (
      <div className="text-right font-bold pr-5">
        {props.row.original.type === "Expense" ? "- " : ""}
        {new Intl.NumberFormat().format(props.getValue())} PHP
      </div>
    ),
  },
];

export default columnDefinition;