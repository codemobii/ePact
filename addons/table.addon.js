import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import React from "react";

export default function TableAddon({
  tableTitles = ["S/N", "Title", "Description", "Date"],
}) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {tableTitles.map((data, key) => (
            <Th key={key}>{data}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {[1, 2, 3, 4, 5, 6, 7, 7].map((data, key) => (
          <Tr key={key}>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
