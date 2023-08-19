import { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Checkbox,
  Divider,
  ListItemIcon,
} from '@mui/material';

const departmentData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartMentList = () => {
  const [open, setOpen] = useState<string | null>(null);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleToggle = (deptName: string) => {
    if (selectedDepartments.includes(deptName)) {
      setSelectedDepartments(selectedDepartments.filter((dept) => dept !== deptName));
    } else {
      setSelectedDepartments([...selectedDepartments, deptName]);
    }
  };

  return (
    <List>
      {departmentData.map((department) => (
        <div key={department.department}>
          <ListItemButton
            onClick={() => setOpen(open === department.department ? null : department.department)}
          >
            <ListItemText
              primary={`${department.department} ${open === department.department ? '-' : '+'}`}
            />
          </ListItemButton>
          <Collapse in={open === department.department} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.sub_departments.map((subDept) => (
                <ListItemButton key={subDept}>
                  <ListItemIcon>
                    <Checkbox
                      checked={
                        selectedDepartments.includes(subDept) ||
                        selectedDepartments.includes(department.department)
                      }
                      indeterminate={
                        selectedDepartments.includes(department.department) &&
                        !selectedDepartments.includes(subDept)
                      }
                      onClick={() => handleToggle(subDept)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDept} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default DepartMentList;
