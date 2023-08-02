"use client"

import React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  buttonVariants,
} from "./ui"

export function HelloTool() {
  const [open, setOpen] = React.useState(false)

  return (
    <Menubar className="hello-tool fixed bottom-[50%] right-0 m-0 flex h-auto w-[70px] translate-y-[50%] flex-col items-center justify-center rounded-2xl p-2">
      {/* Magic */}
      <MenubarMenu>
        <MenubarTrigger className="rounded-lg">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "flex h-[35px] w-[45px] items-center justify-center rounded-lg p-0"
            )}
          >
            <Icons.magic className="h-4 w-4" />
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Keyboard Shortcuts <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Command Palette <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Extentions <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Themes</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Color Theme</MenubarItem>
              <MenubarItem>File Icon Theme</MenubarItem>
              <MenubarItem>Product Icon Theme</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Profile... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* Inbox */}
      <MenubarMenu>
        <MenubarTrigger>
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "m-0 flex h-[35px] w-[45px] items-center justify-center rounded-lg p-0"
            )}
          >
            <Icons.inbox className="h-4 w-4" />
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Keyboard Shortcuts <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Command Palette <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Extentions <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Themes</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Color Theme</MenubarItem>
              <MenubarItem>File Icon Theme</MenubarItem>
              <MenubarItem>Product Icon Theme</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Profile... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* <Dialog>
        <DialogTrigger asChild>
          <div>

            <ContextMenu>
              <ContextMenuTrigger>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "flex justify-center items-center p-0 m-0 rounded-lg h-[35px] w-[45px]"
                  )}
                >

                  <Icons.inbox className="w-4 h-4" />

                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Profile</ContextMenuItem>
                <ContextMenuItem>Billing</ContextMenuItem>
                <ContextMenuItem>Team</ContextMenuItem>
                <ContextMenuItem>Subscription</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
            <span className="sr-only">Social Medias</span>
          </div>
        </DialogTrigger>
        <DialogContent className="pr-1 pb-0 pl-4">
          <Tabs defaultValue="vlog" className="">
            <DialogHeader>
              <DialogTitle>
                <TabsList className="absolute left-4 top-3 w-[200px]">
                  <TabsTrigger value="vlog">Vlog</TabsTrigger>
                  <TabsTrigger value="gaming">Gaming</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                </TabsList>
              </DialogTitle>
              <DialogDescription className=" h-[345px] overflow-y-auto overflow-x-hidden pt-7">
                <TabsContent value="vlog">
                  <div className="grid grid-cols-2 gap-3 justify-stretch">
                    {socialMediaConfig.platformVlog?.map(
                      (item) =>
                        item.href && (
                          <SocialMedia
                            key={item.href}
                            href={item.href}
                            onOpenChange={setOpen}
                          >
                            {item.title}
                          </SocialMedia>
                        )
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="gaming">
                  <div className="grid grid-cols-2 gap-3 justify-stretch">
                    {socialMediaConfig.platformGaming?.map(
                      (item) =>
                        item.href && (
                          <SocialMedia
                            key={item.href}
                            href={item.href}
                            onOpenChange={setOpen}
                          >
                            {item.title}
                          </SocialMedia>
                        )
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="react">
                  <div className="grid grid-cols-2 gap-3 justify-stretch">
                    {socialMediaConfig.platformReact?.map(
                      (item) =>
                        item.href && (
                          <SocialMedia
                            key={item.href}
                            href={item.href}
                            onOpenChange={setOpen}
                          >
                            {item.title}
                          </SocialMedia>
                        )
                    )}
                  </div>
                </TabsContent>
              </DialogDescription>
            </DialogHeader>
          </Tabs>
        </DialogContent>
      </Dialog> */}
      {/* Users */}
      <div className="collab my-2 flex flex-col items-center space-y-2 border-y py-2">
        <Avatar>
          <AvatarImage src="/user-one.jpg" alt="@shadcn" />
          <AvatarFallback>1</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/user-two.jpg" alt="@shadcn" />
          <AvatarFallback>2</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/user-three.jpg" alt="@shadcn" />
          <AvatarFallback>3</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/user-four.jpg" alt="@shadcn" />
          <AvatarFallback>4</AvatarFallback>
        </Avatar>

        {/* Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <div>
              {/* <Icons.chevronDown className="w-4 h-4" /> */}

              <ContextMenu>
                <ContextMenuTrigger>
                  <div className=" flex h-[45px] w-[45px] items-center justify-center rounded-full border p-0">
                    <Icons.chevronUp className="h-4 w-4" />
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Profile</ContextMenuItem>
                  <ContextMenuItem>Billing</ContextMenuItem>
                  <ContextMenuItem>Team</ContextMenuItem>
                  <ContextMenuItem>Subscription</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
              <span className="sr-only">Social Medias</span>
            </div>
            {/* <Button variant="outline">Edit Profile</Button> */}
          </DialogTrigger>
          <DialogContent className="pb-0 pl-4 pr-1">
            <Tabs defaultValue="vlog" className="">
              <DialogHeader>
                <DialogTitle>
                  <TabsList className="absolute left-4 top-3 w-[200px]">
                    <TabsTrigger value="vlog">Vlog</TabsTrigger>
                    <TabsTrigger value="gaming">Gaming</TabsTrigger>
                    <TabsTrigger value="react">React</TabsTrigger>
                  </TabsList>
                </DialogTitle>
                <DialogDescription className=" h-[345px] overflow-y-auto overflow-x-hidden pt-7">
                  <TabsContent value="vlog">
                    <div className="grid grid-cols-2 justify-stretch gap-3">
                      {socialMediaConfig.platformVlog?.map(
                        (item) =>
                          item.href && (
                            <SocialMedia
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                            >
                              {item.title}
                            </SocialMedia>
                          )
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="gaming">
                    <div className="grid grid-cols-2 justify-stretch gap-3">
                      {socialMediaConfig.platformGaming?.map(
                        (item) =>
                          item.href && (
                            <SocialMedia
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                            >
                              {item.title}
                            </SocialMedia>
                          )
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="react">
                    <div className="grid grid-cols-2 justify-stretch gap-3">
                      {socialMediaConfig.platformReact?.map(
                        (item) =>
                          item.href && (
                            <SocialMedia
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                            >
                              {item.title}
                            </SocialMedia>
                          )
                      )}
                    </div>
                  </TabsContent>
                </DialogDescription>
              </DialogHeader>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
      {/* Sparkles */}
      <MenubarMenu>
        <MenubarTrigger>
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "m-0 flex h-[35px] w-[45px] items-center justify-center rounded-lg p-0"
            )}
          >
            <Icons.sparkles className="h-4 w-4" />
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Keyboard Shortcuts <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Command Palette <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Extentions <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Themes</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Color Theme</MenubarItem>
              <MenubarItem>File Icon Theme</MenubarItem>
              <MenubarItem>Product Icon Theme</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Profile... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* Code */}
      <MenubarMenu>
        <MenubarTrigger>
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "m-0 flex h-[35px] w-[45px] items-center justify-center rounded-lg p-0"
            )}
          >
            <Icons.code className="h-4 w-4" />
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="codesandbox">
            <MenubarRadioItem value="gitpod">Gitpod</MenubarRadioItem>
            <MenubarRadioItem value="github-codespace">
              Github Codespace
            </MenubarRadioItem>
            <MenubarRadioItem value="visual-studio-code">
              Visual Studio Code(app + broweser)
            </MenubarRadioItem>
            <MenubarRadioItem value="codesandbox">CodeSandbox</MenubarRadioItem>
            <MenubarRadioItem value="repkit">Repkit</MenubarRadioItem>
            <MenubarRadioItem value="stackblitz">Stackblitz</MenubarRadioItem>
            <MenubarRadioItem value="codePen">CodePen</MenubarRadioItem>
            <MenubarRadioItem value="sandbox">Sandbox</MenubarRadioItem>
            <MenubarRadioItem value="js-bin">JS Bin</MenubarRadioItem>
            <MenubarRadioItem value="aws-cloud9">AWS Cloud9</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit Editor Configuration...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add A Editor...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

interface SocialMediaProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function SocialMedia({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: SocialMediaProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "flex h-[50px] items-center justify-center rounded-md border"
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
