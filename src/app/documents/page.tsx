'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Eye, PenSquare, CheckCircle, Clock, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SignatureModal } from '@/components/documents/signature-modal';

type Document = {
  name: string;
  status: "Signed" | "Pending";
};

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const handleSignClick = (doc: Document) => {
    setSelectedDoc(doc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoc(null);
  };

  const handleConfirmSignature = () => {
    if (selectedDoc) {
      setDocuments(docs =>
        docs.map(d => (d.name === selectedDoc.name ? { ...d, status: 'Signed' } : d))
      );
    }
    handleCloseModal();
  };


  return (
    <>
      <div className="w-full space-y-6">
        <Card>
          <CardHeader className="bg-card p-6">
            <CardTitle className="text-3xl">Document Center</CardTitle>
            <CardDescription className="text-base pt-1">
              Review, sign, and download your move-related documents.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-2/5 pl-6">Document Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.length > 0 ? (
                    documents.map((doc) => (
                      <TableRow key={doc.name}>
                        <TableCell className="pl-6 font-medium">{doc.name}</TableCell>
                        <TableCell>
                          <Badge variant={doc.status === 'Signed' ? 'default' : 'secondary'} className="gap-1.5">
                            {doc.status === 'Signed' ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                            {doc.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                           {/* Desktop Actions */}
                          <div className="hidden md:flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="mr-2 h-4 w-4" /> View
                            </Button>
                            <Button variant="default" size="sm" disabled={doc.status === 'Signed'} onClick={() => handleSignClick(doc)}>
                              <PenSquare className="mr-2 h-4 w-4" /> Sign
                            </Button>
                            <Button variant="outline" size="sm" disabled={doc.status !== 'Signed'}>
                              <Download className="mr-2 h-4 w-4" /> Download
                            </Button>
                          </div>
                           {/* Mobile Actions */}
                           <div className="md:hidden">
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-5 w-5" />
                                    <span className="sr-only">More actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                      <Eye className="mr-2 h-4 w-4" /> View
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleSignClick(doc)} disabled={doc.status === 'Signed'}>
                                      <PenSquare className="mr-2 h-4 w-4" /> Sign
                                  </DropdownMenuItem>
                                  <DropdownMenuItem disabled={doc.status !== 'Signed'}>
                                      <Download className="mr-2 h-4 w-4" /> Download
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                             </DropdownMenu>
                           </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="h-24 text-center">
                        No documents found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
      <SignatureModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmSignature}
        documentName={selectedDoc?.name || ''}
      />
    </>
  );
}
