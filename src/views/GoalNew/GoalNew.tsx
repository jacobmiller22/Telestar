import React, { useState } from "react";
import { useRouter } from "next/router";

/** Components */
import SimpleForm from "components/Atomics/SimpleForm";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { IFormQuery, EFormQueryType } from "interfaces";

const queries: IFormQuery[] = [
  {
    name: "name",
    label: "Name",
    type: EFormQueryType.TEXT,
    required: true,
  },
  {
    name: "goal",
    label: "Goal",
    type: EFormQueryType.NUMBER,
    required: true,
    startAdornment: "$",
  },
  {
    name: "progress",
    label: "Progress",
    type: EFormQueryType.NUMBER,
    required: false,
    startAdornment: "$",
  },
  {
    name: "description",
    label: "Description",
    type: EFormQueryType.TEXT,
    required: true,
  },
];

interface IGoalNew {
  name: string;
  goal: number;
  progress: number;
  description: string;
}

const GoalNew = () => {
  const router = useRouter();

  const initFormData: IGoalNew = {
    name: router.query.name as string,
    goal: 0,
    progress: 0,
    description: "",
  };

  const [formData, setFormData] = useState<IGoalNew>(initFormData);

  return (
    <div style={{ maxWidth: "700px", width: "100%", marginTop: "24px" }}>
      <Card variant="outlined" sx={{ width: "100%" }}>
        <CardHeader title="New Goal" />
        <Divider variant="middle" />
        <SimpleForm
          queries={queries}
          data={formData}
          onChange={(key: string, value: string | number) =>
            setFormData({ ...formData, [key]: value })
          }
          submit={{
            label: "Create",
            onSubmit: () => console.log("Submitting!"),
          }}
          cancel={{
            label: "Cancel",
            onCancel: () => router.push("/goals"),
          }}
        />
      </Card>
    </div>
  );
};

export default GoalNew;
