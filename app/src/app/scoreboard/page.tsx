"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Attempt {
  username: string;
  wpm: number;
  accuracy: number;
}
export default function Home() {
  const [attempts, setAttempts] = useState<Array<Attempt>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAttempts = async () =>
      await axios.get("http://localhost:3000/attempt");

    getAttempts().then(({ data }) => {
      setAttempts(data);
      console.log(data);
    });
    setLoading(false);
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <div>
        <h1 className="text-3xl font-semibold">Scoreboard</h1>
        <div className="mt-6">
          {loading && <div>Loading...</div>}
          {!loading && (
            <Table>
              <TableCaption>A list of highest scores.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[20px]">Place</TableHead>

                  <TableHead className="w-[100px]">Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Wpm</TableHead>
                  <TableHead className="text-right">Accuracy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attempts.map((attempt, id) => (
                  <TableRow key={id}>
                    <TableCell className="font-medium">{id + 1}</TableCell>
                    <TableCell className="font-medium">
                      {attempt.username}
                    </TableCell>
                    <TableCell>{attempt.email}</TableCell>
                    <TableCell>{attempt.maxWpm}</TableCell>
                    <TableCell className="text-right">
                      {attempt.accuracy}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </main>
  );
}
