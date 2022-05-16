import { Breadcrumb, Layout, List, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Note } from "../components/Notes/Note";
import { useRootStore } from "../index";
import { IContentModel } from "../interfaces/interfaces";
import { CardCustom } from "./CardCustom";

const { Footer } = Layout;

export const ContentLayout = observer(() => {
  const { contents, contents_notes } = useRootStore();
  console.log("contents: ", contents);

  useEffect(() => {
    console.log(">>contents_notes", contents_notes);
  }, [contents_notes]);

  return (
    <>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Row gutter={16}>
            {contents.map((content: IContentModel, index: number) => {
              return <CardCustom key={index} content={content} />;
            })}
          </Row>
        </div>

        <div>
          {contents_notes.map((content: IContentModel, index: number) => {
            return (
              <List.Item key={index}>
                <Note content={content} />
              </List.Item>
            );
          })}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </>
  );
});
