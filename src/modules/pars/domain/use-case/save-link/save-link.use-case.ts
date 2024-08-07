import { Injectable } from '@nestjs/common';
import { ISaveLinkUseCase } from './i-save-link.use-case';
import * as Excel from 'exceljs';

@Injectable()
export class SaveLinkUseCase implements ISaveLinkUseCase {
    async saveToExcel(vipLinks: string[], filename: string): Promise<void> {
        const workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet('VIP-ссылки');

        worksheet.addRow(['№', 'Ссылка']);

        vipLinks.forEach((link, index) => {
            worksheet.addRow([index + 1, link]);
        });

        await workbook.xlsx.writeFile(filename);
    }
}
