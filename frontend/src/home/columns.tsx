import React, { useEffect, useRef, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export type Activity = {
  id: number;
  name: string;
  size: string;
  hash: string;
  status: string;
  showDropdown?: boolean;
  peers?: number;
  isEditing?: boolean;
  isSelected?: boolean;
};

export const getColumns = (
  toggleDropdown: (id: number) => void,
  updateActivityName: (id: number, newName: string) => void,
  toggleEdit: (id: number) => void,
  removeAllSelected: () => void,
  updateSelection: (id: number, isSelected: boolean) => void,
  updateAllSelections: (isSelected: boolean) => void,
  removeActivity: (id: number) => void,
  activities: Activity[]
): ColumnDef<Activity>[] => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      activities.forEach((activity) => {
        if (activity.showDropdown) {
          const dropdownElement = document.getElementById(
            `dropdown-${activity.id}`
          );
          if (
            dropdownElement &&
            !dropdownElement.contains(event.target as Node)
          ) {
            toggleDropdown(activity.id);
          }
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activities]);

  const selectColumn: ColumnDef<Activity> = {
    id: "select",
    header: ({ table }) => (
      <>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
            updateAllSelections(!!value);
          }}
          aria-label="Select all"
        />
      </>
    ),
    cell: ({ row }) => (
      <div
        className={`row ${
          row.original.isSelected ? "selected-row" : "not-selected-row"
        }`}
      >
        <Checkbox
          checked={row.original.isSelected || false}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
            updateSelection(row.original.id, !!value);
          }}
          aria-label="Select row"
        />
      </div>
    ),
  };

  return [
    selectColumn,
    {
      accessorKey: "name",
      header: "File Name",
      cell: ({ row }) => {
        const truncatedName =
          row.original.name.length > 24
            ? `${row.original.name.substring(0, 24)}...`
            : row.original.name;
        if (row.original.isEditing) {
          return (
            <input
              type="text"
              defaultValue={row.original.name}
              className="bg-gray-800 text-gray-200 border-none"
              onBlur={(e) => {
                updateActivityName(row.original.id, e.target.value);
                toggleEdit(row.original.id);
              }}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.currentTarget.blur();
                }
              }}
            />
          );
        }
        return (
          <div>
            {truncatedName}
            <div style={{ color: "gray", fontSize: "smaller" }}>
              {row.original.hash}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "size",
      header: "Size",
    },
    {
      accessorKey: "peers",
      header: "Peers",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("peers") || "-"}</div>
      ),
    },
    {
      id: "dropdown",
      header: () => null,
      cell: ({ row }) => (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => {
              // toggle the current row's dropdown
              toggleDropdown(row.original.id);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {row.original.showDropdown && (
            <div
              className="fixed right-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-xl z-20 border border-gray-700"
              id={`dropdown-${row.original.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 border-b border-gray-600"
              >
                Download
              </a>
              <div
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 border-b border-gray-600 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  toggleEdit(row.original.id);
                  toggleDropdown(row.original.id);
                }}
              >
                Rename
              </div>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 border-b border-gray-600"
              >
                View File Details
              </a>
              <div
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 border-b border-gray-600 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(row.original.hash);
                  toggleDropdown(row.original.id);
                }}
              >
                Copy CID
              </div>
              <div className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                >
                  Publish to OrcaNet
                </button>
                {isModalOpen && (
                  <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full mx-4">
                      <div className="flex justify-center mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-12 h-12 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v6a2 2 0 002 2h5l4 4V1l-4 4zm0 0c9 0 9 4 9 4v2s0 4-9 4v-2"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        Publish to OrcaNet
                      </h2>
                      <div className="mb-6">
                        <p className="text-lg font-semibold text-white">
                          CID:
                        </p>
                        <p className="text-white">{row.original.hash}</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-lg font-semibold text-white">
                          Select key for publishing:
                        </p>
                        <div className="mt-2 text-center">
                          <input
                            type="radio"
                            id="selfKey"
                            name="publishKey"
                            value="self"
                            checked
                          />
                          <label
                            htmlFor="selfKey"
                            className="ml-2 text-white"
                          >
                            self
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-center space-x-4 bg-gray-600 p-4 rounded-b-2xl">
                        <button
                          className="flex-1 justify-center py-3 px-6 border border-transparent shadow text-lg font-medium rounded-md text-gray-800 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                          onClick={() => {
                            setIsModalOpen(false);
                            toggleDropdown(row.original.id);
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          className="flex-1 justify-center py-3 px-6 border border-transparent shadow text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                          onClick={() => {
                            setIsModalOpen(false);
                            toggleDropdown(row.original.id);
                          }}
                        >
                          Publish
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];
};
