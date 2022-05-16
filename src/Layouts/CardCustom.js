import { useEffect } from "react";
import { Button, Checkbox, Input } from "antd";
import { observer } from "mobx-react-lite";
import Card from "antd/lib/card";

export const CardCustom = observer(
  ({
    title,
    description,
    notes,
    changeNotes,
    isSeen,
    changeSeen,
    seen,
    addNote,
    removeNote,
  }) => {
    useEffect(() => {
      if (isSeen) {
        // alert(`Is seen ${ title }`)
        console.log(">>title", title);
      }
    }, [isSeen]);

    return (
      <Card title={title} bordered={false}>
        {description}

        <Input
          value={notes}
          placeholder={notes}
          onChange={(e) => changeNotes(e.target.value)}
        />

        <Checkbox
          defaultChecked={seen}
          checked={seen}
          onChange={(e) => changeSeen(e.target.checked)}
        />

        <Button onClick={addNote}>Add Note</Button>
        <Button type={"primary"} onClick={removeNote}>
          Remove Note
        </Button>
      </Card>
    );
  }
);
