---
layout: paper
title: "Automorphism groups and Homogeneous fibrations on projective varieties with nef anticanonical divisors"
title_ja: "反標準因子がnefな射影多様体の自己同型群と斉次fibration"
authors: "Zhan Li, Jinsong Xu"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We explore the homogeneous structures of Albanese morphisms and maximal rationally chain-connected fibrations of algebraic varieties with nef anticanonical divisors. Furthermore, we show that there exists a natural group homomorphism associated with a maximal rationally chain-connected fibration, which induces the Chevalley decomposition of $\operatorname{Aut}^0$ up to an isogeny. This result is analogous to a similar theorem of Nishi and Matsumura for Albanese morphisms. In addition, we reprove Nishi and Matsumura's theorem using the modern language of algebraic geometry.
topic: algebraic-geometry
tags:
  - positivity
  - birational-geometry
  - singularities
arxiv_id: "2609.09976v1"
arxiv_url: "https://arxiv.org/abs/2609.09976"
arxiv_submitted: "2026-09-09"
arxiv_updated: "2026-09-09"
summary: >-
  nefなlog反標準因子を持つ射影klt対について、Albanese射と最大有理鎖連結fibrationが自己同型群の作用から斉次的に記述できることを示す。MRCC fibrationに自然な群準同型を付随させ、$\operatorname{Aut}^0$のChevalley分解をisogenyまで復元する。
abstract_en: >-
  We explore the homogeneous structures of Albanese morphisms and maximal rationally chain-connected fibrations of algebraic varieties with nef anticanonical divisors. Furthermore, we show that there exists a natural group homomorphism associated with a maximal rationally chain-connected fibration, which induces the Chevalley decomposition of $\operatorname{Aut}^0$ up to an isogeny. This result is analogous to a similar theorem of Nishi and Matsumura for Albanese morphisms. In addition, we reprove Nishi and Matsumura's theorem using the modern language of algebraic geometry.
summary_en: ""
abstract_ja: >-
  反標準因子がnefな代数多様体について、Albanese射と最大有理鎖連結fibrationの斉次構造を調べる。MRCC fibrationに付随する自然な群準同型が、連結自己同型群のChevalley分解をisogenyまで誘導することを示す。これはAlbanese射に対するNishi--Matsumuraの定理に対応する結果であり、同定理の現代的な代数幾何による再証明も与える。
abstract_source_url: "https://arxiv.org/abs/2609.09976"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2609.09976](https://arxiv.org/abs/2609.09976)
- **著者:** Zhan Li, Jinsong Xu
- **初回投稿日:** 2026年9月9日
- **最終更新日:** 2026年9月9日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

標準束や反標準束の正値性は、Albanese射などの自然な射の幾何を強く制約する。標準束が自明な場合の局所自明性は古典的であり、nef反標準因子を持つ場合にもAlbanese射と最大有理鎖連結fibrationの局所定数性が知られている。

本論文はこの解析的な局所定数性を、連結自己同型群$\operatorname{Aut}^0(X)$による斉次空間表示へ高める。対象はnefなlog反標準因子$-(K_X+\Delta)$を持つ射影klt対である。

Albanese射は自己同型群とある正規部分群から作られるassociated bundleとして記述される。MRCC fibrationについても有限準エタール被覆後に同様の表示が得られ、基底側への自然な群準同型が構成される。

この準同型は$\operatorname{Aut}^0$のaffine部分とabelian quotientを分けるChevalley分解をisogenyまで実現する。Introductionは、これらの代数的定式化がnef反標準多様体のcone予想やモジュライ問題に有用になると位置付ける。

## 背景と問題設定

連結代数群$G$には最大連結affine部分群$G_{\mathrm{aff}}$があり、商$G/G_{\mathrm{aff}}$はabelian多様体となる。これがChevalley分解である。Albanese射にはNishi--Matsumuraの定理がこの分解を結び付けるが、MRCC fibrationは一般にほとんど正則な有理写像で、基底も双有理同値までしか定まらない。そのため通常のBlanchard lemmaから自然な自己同型群の準同型を直ちには得られない。

## 主結果

### Albanese射の斉次表示（Theorem 1.1）

射影klt対$(X,\Delta)$で$-(K_X+\Delta)$がnefなら、Albanese射$a_X:X\to\operatorname{Alb}(X)$は

$$
\operatorname{Aut}^0(X)\times_H F\longrightarrow \operatorname{Aut}^0(X)/H
$$

という$\operatorname{Aut}^0(X)$-同変fibrationと同定できる。ここで$F$は単位元上のファイバー、$H$は$H/\operatorname{Aut}^0(X)_{\mathrm{aff}}$が有限となる正規部分群である。

### MRCC fibrationの斉次表示（Theorem 1.2）

同じ仮定の下、有限準エタール被覆$X'\to X$を取ると、$X'$は局所定数なMRCC fibration $\psi:X'\to Y$を持ち、$Y$のAlbanese射も局所定数となる。適切な部分群$H$と有限群$K$を用い、$\psi$はassociated bundle間の自然な$\operatorname{Aut}^0(X')$-同変射として表示される。$X$が滑らかで$\Delta=0$なら被覆を取らず$X'=X$とできる。

### ほとんど正則な射に対するBlanchard lemma（Lemma 1.5）

正規射影多様体間のほとんど正則な射影fibration $f:X\dashrightarrow Z$に対し、$Z$と双有理な多様体$T$と自然な群準同型

$$
\operatorname{Aut}^0(X)\longrightarrow\operatorname{Aut}^0(T)
$$

を構成する。これがMRCC fibrationからChevalley分解を取り出すための技術的な橋渡しとなる。

## 証明の見取り図

既知のAlbanese射・MRCC fibrationの局所定数性を入力とし、代数群の作用とassociated bundleの言葉へ翻訳する。MRCC fibrationの不定性にはBlanchard lemmaをほとんど正則な射へ拡張して対応し、双有理モデル上の群作用を構成する。その準同型の核が最大affine部分群を有限指数まで含むことからChevalley分解を得る。

## 原論文との対応
- **Abstractページ:** [arXiv:2609.09976](https://arxiv.org/abs/2609.09976)
- **Introduction:** Section 1, pp. 1--4
- **Introduction中で言及された主要定理番号:** Theorems 1.1--1.4, Lemma 1.5
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
