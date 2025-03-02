import IconCheckCircle from '@aboutbits/react-material-icons/dist/IconCheckCircleRoundedFilled'
import IconDraftRounded from '@aboutbits/react-material-icons/dist/IconDraftRoundedFilled'
import classNames from 'classnames'
import { ReactNode, useEffect, useState } from 'react'
import { useInternationalization, useTheme } from '../../framework'
import { LoadingSpinner } from '../loading/LoadingSpinner'
import { FileSpace, FileState, FileUploadObject } from './FileUploadState'

export type FileListItemProps<TRemoteFile> = {
  fileUploadObject: FileUploadObject<TRemoteFile>
  renderRemoteFileName: (remoteFile: TRemoteFile) => string
  /**
   * @param remoteFile
   * @returns The size of the remote file in bytes
   */
  renderRemoteFileDescription?: (remoteFile: TRemoteFile) => ReactNode
  disabled?: boolean
  fileActions?: ReactNode
}

export function FileListItem<TRemoteFile>({
  fileUploadObject,
  renderRemoteFileName,
  disabled,
  fileActions,
  renderRemoteFileDescription,
}: FileListItemProps<TRemoteFile>) {
  const [recentlyUploaded, setRecentlyUploaded] = useState<boolean>()
  const { messages } = useInternationalization()

  const fileState = fileUploadObject.state

  const name =
    fileUploadObject.space === FileSpace.Remote
      ? renderRemoteFileName(fileUploadObject.file)
      : fileUploadObject.file.name

  useEffect(() => {
    if (
      fileUploadObject.prevState === FileState.Uploading &&
      fileUploadObject.state === FileState.Uploaded
    ) {
      setRecentlyUploaded(true)
      setTimeout(() => {
        setRecentlyUploaded(false)
      }, 1800)
    }
  }, [fileUploadObject.prevState, fileUploadObject.state])

  const { files } = useTheme()

  return (
    <div className={classNames(files.fileList.item.container)}>
      <div className={files.fileList.item.content}>
        {fileUploadObject.state === FileState.Uploading ? (
          <div
            className={classNames(
              files.icon.container.base,
              files.icon.container.default,
            )}
          >
            <LoadingSpinner
              className={classNames(files.icon.size, files.icon.default)}
            />
          </div>
        ) : (
          <div
            className={classNames(
              files.icon.container.base,
              fileUploadObject.state === FileState.Failed
                ? files.icon.container.error
                : disabled
                  ? files.icon.container.disabled
                  : recentlyUploaded
                    ? files.icon.container.success
                    : files.icon.container.default,
            )}
          >
            {recentlyUploaded ? (
              <IconCheckCircle
                className={classNames(files.icon.size, files.icon.success)}
              />
            ) : (
              <IconDraftRounded
                className={classNames(
                  files.icon.size,
                  disabled
                    ? files.icon.disabled
                    : fileUploadObject.state === FileState.Failed
                      ? files.icon.error
                      : files.icon.default,
                )}
              />
            )}
          </div>
        )}
        <div className={files.fileList.item.textContainer}>
          <div className={classNames(files.text.bold)}>{name}</div>
          <div
            className={
              fileUploadObject.state === FileState.Failed
                ? files.text.error
                : files.text.info
            }
          >
            {fileUploadObject.state === FileState.Failed
              ? fileUploadObject.message
              : fileState === FileState.Uploading
                ? messages['files.item.uploading']
                : fileState === FileState.Uploaded &&
                    fileUploadObject.space === FileSpace.Remote &&
                    renderRemoteFileDescription
                  ? renderRemoteFileDescription(fileUploadObject.file)
                  : ''}
          </div>
        </div>
        {fileActions && (
          <div className={files.fileList.item.actions}>{fileActions}</div>
        )}
      </div>
      {fileUploadObject.state === FileState.Uploading &&
        fileUploadObject.progress !== undefined &&
        fileUploadObject.progress > 0 && (
          <div
            className={files.fileList.item.progress}
            style={{ width: `${fileUploadObject.progress * 100}%` }}
          />
        )}
    </div>
  )
}
