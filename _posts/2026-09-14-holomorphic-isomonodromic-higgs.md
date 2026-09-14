---
layout: paper
title: "Holomorphic isomonodromic deformations of Higgs bundles: absolute lifting, spectral flatness, and nilpotent rigidity"
title_ja: "Higgs束の正則等モノドロミー変形：絶対持ち上げ・スペクトル平坦性・冪零剛性"
authors: "Tianzhi Hu, Mai Shi, Kang Zuo"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $f:X\to S$ be a smooth projective family, and fix a semisimple flat bundle on a fiber $X_0$. Its isomonodromic deformation determines a holomorphic section $\sigma_{\mathrm{dR}}:S\to M_{\mathrm{dR}}(X/S)$ of the relative de Rham moduli space. Applying the relative non-abelian Hodge correspondence fiberwise gives a section $\sigma_{\mathrm{Dol}}:S\to M_{\mathrm{Dol}}(X/S)$, whose value at each $s\in S$ is the Higgs bundle corresponding to the flat bundle $\sigma_{\mathrm{dR}}(s)$. Unlike $\sigma_{\mathrm{dR}}$, the section $\sigma_{\mathrm{Dol}}$ is in general only real analytic. We study the geometric consequences of its holomorphicity along a complex analytic subvariety. First, we prove an absolute lifting theorem: the relative isomonodromic Higgs bundle admits an absolute Higgs lift, and the fiberwise harmonic metrics can be modified to solve the Hitchin-Simpson equation on the total space. Second, we prove that the spectral one-form on every resolved irreducible component of the relative spectral scheme is Gauss-Manin flat. As an application, we prove the nilpotent rigidity conjecture of Hu-Sun-Yang-Zuo: if the initial Higgs field is nilpotent, then the Higgs field remains nilpotent along the entire holomorphic isomonodromic locus.
topic: algebraic-geometry
tags:
  - higgs-nonabelian-hodge
  - moduli
  - hodge-theory
arxiv_id: "2609.12416v1"
arxiv_url: "https://arxiv.org/abs/2609.12416"
arxiv_submitted: "2026-09-11"
arxiv_updated: "2026-09-11"
summary: >-
  滑らかな射影族上の等モノドロミー変形を非可換Hodge対応でHiggs束側へ移したとき、その正則性が持つ幾何学的帰結を調べる。正則な軌跡上で相対Higgs束を全空間へ絶対的に持ち上げ、スペクトル1形式のGauss--Manin平坦性を示し、冪零Higgs場が変形中も冪零に保たれるという予想を解決する。
abstract_en: ""
summary_en: >-
  A flat bundle moving isomonodromically gives a holomorphic de Rham section, but its image under fiberwise nonabelian Hodge theory is generally only real analytic. The paper studies loci where this Dolbeault section becomes holomorphic. On such loci the relative Higgs field extends to an absolute Higgs field solving the total-space Hitchin--Simpson equation after adjusting harmonic metrics. Spectral classes are then Gauss--Manin flat, which implies that an initially nilpotent Higgs field remains nilpotent throughout the holomorphic locus.
abstract_ja: >-
  滑らかな射影族 $f:X\to S$ の一つのファイバー上に半単純平坦束を固定する。その等モノドロミー変形は相対de Rhamモジュライの正則切断を与えるが、ファイバーごとの非可換Hodge対応で得るDolbeault切断は一般には実解析的にしかならない。本論文はこの切断が複素解析的部分多様体上で正則になる場合を扱う。相対Higgs束の絶対Higgs持ち上げ、スペクトル1形式のGauss--Manin平坦性を証明し、初期Higgs場が冪零なら正則等モノドロミー軌跡全体で冪零性が保たれることを導く。
abstract_source_url: "https://arxiv.org/abs/2609.12416"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.12416](https://arxiv.org/abs/2609.12416)
- **著者:** Tianzhi Hu, Mai Shi, Kang Zuo
- **初回投稿日:** 2026年9月11日
- **最終更新日:** 2026年9月11日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

等モノドロミー変形は相対de Rhamモジュライでは正則に動くが、非可換Hodge対応は複素解析的写像ではないため、対応するHiggs束の族は一般に実解析的である。本論文はDolbeault切断が正則になる特別な軌跡から何が従うかを問う。

第一に、正則性は単なるパラメータ方向の性質ではなく、相対Higgs場を族の全空間上の絶対Higgs場へ持ち上げる。さらにファイバーごとの調和計量を修正し、全空間上でHitchin--Simpson方程式を満たすようにできる。

第二に、相対スペクトルschemeの各既約成分を解消した上で、スペクトル1形式のコホモロジー類がGauss--Manin接続に関して平坦となる。この平坦性を用いてHu--Sun--Yang--Zuoの冪零剛性予想を、generic regularity仮定なしで証明する。

## 背景と問題設定

相対非可換Hodge対応

$$
\mathrm{NHC}:M_{\mathrm{dR}}(X/S)\xrightarrow{\sim}M_{\mathrm{Dol}}(X/S)
$$

により、等モノドロミー切断 $\sigma_{\mathrm{dR}}$ から $\sigma_{\mathrm{Dol}}=\mathrm{NHC}\circ\sigma_{\mathrm{dR}}$ を得る。従来研究はその非正則性を測る非可換Kodaira--Spencer写像を導入しており、本論文は逆に正則となる軌跡の剛性を明らかにする。

## 主結果

### 絶対Higgs持ち上げ（Theorem A / Theorem 2.5）

$U$ が可縮Stein多様体で $\sigma_{\mathrm{Dol}}|_U$ が正則なら、$X_U/U$ 上の相対等モノドロミーHiggs束は $X_U$ 上の絶対Higgs持ち上げを持つ。ファイバーごとの調和計量も、絶対Higgs場とともに全空間上のHitchin--Simpson方程式を解くよう選べる。

### スペクトル1形式の平坦性（Theorem B / Theorem 3.4）

$U\subset S$ が既約複素解析的部分多様体で制限切断が正則なら、相対スペクトル1形式は平坦である。より正確には、被約相対スペクトルschemeの各既約成分を解消した後、そのコホモロジー類がGauss--Manin平坦となる。

### 冪零剛性（Theorem C / Theorem 4.1）

$U$ が初期点を含み、$\sigma_{\mathrm{Dol}}|_U$ が正則で、初期Higgs場 $\theta_0$ が冪零なら、すべての $u\in U$ で $\sigma_{\mathrm{Dol}}(u)$ のHiggs場は冪零である。先行結果に必要だったgeneric regular nilpotent仮定を除く。

## 証明の見取り図

絶対持ち上げでは先行研究の一次変形法とファイバー上の調和計量を組み合わせ、計量を適切に修正して全空間のHiggs束を構成する。スペクトル1形式をスペクトル被覆上の一般化固有空間に制限したHiggs場のtraceとして表し、一次変形法からGauss--Manin平坦性を得る。初期の冪零性はスペクトルデータの消滅として読めるため、この平坦性が族全体での冪零性を強制する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.12416](https://arxiv.org/abs/2609.12416)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorem A（Theorem 2.5）, Theorem B（Theorem 3.4）, Theorem C（Theorem 4.1）
- **論文構成の説明:** Introductionの三つの小節
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
