import { BaseHeading, BaseTag } from "@shuriken-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tag",
  description: "Tag variations",
};

function TagPage() {
  return (
    <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Tag shadow
        </BaseHeading>
        <div className="flex gap-2">
          <BaseTag shape="rounded" color="default" shadow="flat">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="muted" shadow="flat">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="primary" shadow="flat">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="success" shadow="flat">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="info" shadow="flat">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="warning" shadow="flat">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="danger" shadow="flat">
            Label
          </BaseTag>
        </div>
      </div>

      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Tag shadow hover
        </BaseHeading>
        <div className="flex gap-2">
          <BaseTag shape="rounded" color="default" shadow="hover">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="muted" shadow="hover">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="primary" shadow="hover">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="success" shadow="hover">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="info" shadow="hover">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="warning" shadow="hover">
            Label
          </BaseTag>
          <BaseTag shape="rounded" color="danger" shadow="hover">
            Label
          </BaseTag>
        </div>
      </div>

      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Tag Outline
        </BaseHeading>
        <div className="flex gap-2">
          <BaseTag
            shape="rounded"
            flavor="outline"
            color="default"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="outline"
            color="muted"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="outline"
            color="primary"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="outline"
            color="success"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag shape="rounded" flavor="outline" color="info" shadow="hover">
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="outline"
            color="warning"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="outline"
            color="danger"
            shadow="hover"
          >
            Label
          </BaseTag>
        </div>
      </div>

      <div>
        <BaseHeading size="xl" weight="medium" className="mb-10">
          Tag Pastel
        </BaseHeading>
        <div className="flex gap-2">
          <BaseTag
            shape="rounded"
            flavor="pastel"
            color="default"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag shape="rounded" flavor="pastel" color="muted" shadow="hover">
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="pastel"
            color="primary"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="pastel"
            color="success"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag shape="rounded" flavor="pastel" color="info" shadow="hover">
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="pastel"
            color="warning"
            shadow="hover"
          >
            Label
          </BaseTag>
          <BaseTag
            shape="rounded"
            flavor="pastel"
            color="danger"
            shadow="hover"
          >
            Label
          </BaseTag>
        </div>
      </div>
    </div>
  );
}

export default TagPage;
