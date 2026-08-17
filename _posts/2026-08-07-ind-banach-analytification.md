---
layout: paper
title: "Analytification for Complex Geometry Revisited"
title_ja: "複素幾何における解析化の再検討"
authors: "Yuto Yamada"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
topic: several-complex-variables
tags:
  - complex-analytic-spaces
arxiv_id: "2605.27961v1"
arxiv_url: "https://arxiv.org/abs/2605.27961v1"
arxiv_submitted: "2026-05-27"
arxiv_updated: "2026-05-27"
summary: >-
  複素解析化をind-Banach代数とcategorified localeの枠組みで再構成し、過収束・正則冪級数環をBerkovich空間の解析的構造として用いる。構成した開円板・閉円板の関数環の冪等性を基礎に、properな複素代数多様体に対する抽象的GAGA型同値を得る。
abstract_en: ""
summary_en: >-
  This work proposes an ind-Banach approach to analytification over the complex numbers. Rings encoding overconvergent and holomorphic functions on discs are used to equip Berkovich spaces with categorical analytic structures. Their idempotency and localization behavior place complex analytic geometry in a formalism inspired by categorified locales and recent tempered methods. An axiomatic GAGA comparison for proper complex varieties is obtained as the principal application.
abstract_ja: >-
  Bambozzi--Chiarellotto--Vanniのtempered cohomologyに着想を得て、複素幾何の解析化を扱うind-Banach枠組みを構成する。過収束冪級数と正則冪級数から複数のind-Banach環を定義し、Berkovich空間へClausen--Scholze型の解析的構造を与えるための性質を検証する。その応用として、この設定における抽象的なGAGA型比較を得る。
abstract_source_url: "https://arxiv.org/abs/2605.27961v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.27961v1](https://arxiv.org/abs/2605.27961v1)
- **著者:** Yuto Yamada
- **初回投稿日・最終更新日:** 2026年5月27日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素代数多様体から複素解析空間への解析化とGAGAは、代数幾何と複素解析を結ぶ古典的な橋である。本論文はこの橋を、ind-Banach $\mathbf C$-代数、Berkovich spectrum、categorified localeという圏論的言語で再構成する。

中心となる入力は、閉単位円板の過収束関数を表す $\mathbf C\{|T|\leq1\}$、開単位円板の正則関数を表す $\mathbf C\{|T|<1\}$、および外側の対応物である。これらを単なる位相環ではなくind-Banach対象として扱い、導来テンソル積に関する冪等性など、開・閉部分空間を符号化するための公理を検証する。

この局所モデルをBerkovich空間上のcategorified localeへ組み込み、解析的構造を圏の層として表す。主な応用は、properな複素代数多様体について代数側と解析側の対応する圏が同値になるという抽象GAGAである。

## 背景と問題設定

Banach環に基づくBerkovich幾何はArchimedes的・非Archimedes的な解析を共通形式で扱える。一方、condensed mathematicsやtempered geometryでは、空間の開閉集合を冪等代数やそのmodule categoryで表すcategorifiedな方法が発展している。本論文の問いは、複素円板上の正則関数環をind-Banach圏内で適切に定義し、その局所データから古典的解析化に相当する形式を作れるか、というものである。

たとえば閉円板の過収束関数環は

$$
\mathbf C\{|T|\leq1\}
=\bigcup_{r>1}\left\{\sum_{n\geq0}a_nT^n\ \middle|\ \sum_{n\geq0}|a_n|r^n<\infty\right\}
$$

と定義される。半径を縮めたBanach環のfiltered colimitとして見ることが重要である。

## 主結果

### 複素円板のind-Banach解析環

Introductionでは概略として次のように述べられている。著者は $\mathbf C\{|T|\leq1\}$、$\mathbf C\{|T|\geq1\}$、$\mathbf C\{|T|<1\}$ などを構成し、categorified localeで解析的開閉部分を定義するための冪等性と貼り合わせの性質を証明する。とくに閉円板の環について導来ind-Banach圏で

$$
\mathbf C\{|T|\leq1\}\widehat\otimes_{\mathbf C[T]}^{\mathbf L}
\mathbf C\{|T|\leq1\}
\simeq \mathbf C\{|T|\leq1\}
$$

となることが局所化を表す基本性質である。

### 抽象GAGA（Theorem 1.1 / Theorem 4.8）

$X$ を $\mathbf C$ 上のproper varietyとすると、構成した解析側の圏と代数側の圏の間に

$$
C^{\mathrm{an}}(X)\simeq C^{\mathrm{alg}}(X)
$$

という同値が得られる。Introductionはこれを、局所環の具体的計算と付録の公理的GAGA形式を組み合わせた応用として位置づける。

## 証明の見取り図

まずind-Banach moduleの導来 $\infty$-圏と、その中の冪等可換代数が作るlocaleを整備する。次に、半径の異なる冪級数Banach環の極限・余極限として円板の関数環を作り、既知のdagger algebraの計算を通じて冪等性を確認する。これによりBerkovich spectrumへ開・閉包含とstructure sheafに相当する圏論的データを与え、最後にproper性の下で抽象GAGAの公理を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.27961v1](https://arxiv.org/abs/2605.27961v1)
- **Introduction:** Section 1, pp. 1–2
- **主要結果:** Theorem 1.1（Theorem 4.8）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
