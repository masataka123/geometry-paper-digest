---
layout: paper
title: "Closed meromorphic 1-forms"
title_ja: "閉meromorphic 1形式"
authors: "Jorge Vitório Pereira"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  We review properties of closed meromorphic $1$-forms and of the foliations defined by them. We present and explain classical results from foliation theory, like index theorems, the existence of separatrices, and resolution of singularities under the lenses of the theory of closed meromorphic $1$-forms and flat meromorphic connections. We apply the theory to investigate the algebraicity separatrices in a semi-global setting (neighborhood of a compact curve contained in the singular set of the foliation), and the geometry of smooth hypersurfaces with numerically trivial normal bundle on compact Kähler manifolds.
topic: several-complex-variables
tags:
  - foliations
  - complex-analytic-spaces
  - stein-geometry
  - positivity
arxiv_id: "2206.09745v3"
arxiv_url: "https://arxiv.org/abs/2206.09745"
arxiv_submitted: "2022-06-20"
arxiv_updated: "2023-06-06"
summary: >-
  閉meromorphic 1形式とそれが定める余次元1葉層を統一的に解説し、留数・平坦meromorphic接続から指数定理、separatrix、特異点解消を捉え直す。新規成果として三次元射影多様体上のsemi-global separatrixの代数性判定、Kähler曲面上の自明な法束をもつ因子の二者択一、数値的自明な法束をもつ超曲面のStein補集合に対する次元制約を与える。
abstract_en: >-
  We review properties of closed meromorphic $1$-forms and of the foliations defined by them. We present and explain classical results from foliation theory, like index theorems, the existence of separatrices, and resolution of singularities under the lenses of the theory of closed meromorphic $1$-forms and flat meromorphic connections. We apply the theory to investigate the algebraicity separatrices in a semi-global setting (neighborhood of a compact curve contained in the singular set of the foliation), and the geometry of smooth hypersurfaces with numerically trivial normal bundle on compact Kähler manifolds.
summary_en: ""
abstract_ja: >-
  閉meromorphic 1形式およびそれが定める葉層の性質を概説する。指数定理、separatrixの存在、特異点解消といった葉層理論の古典的結果を、閉meromorphic 1形式と平坦meromorphic接続の観点から説明する。この理論をsemi-globalな状況におけるseparatrixの代数性と、コンパクトKähler多様体上で数値的自明な法束をもつ滑らかな超曲面の幾何へ応用する。
abstract_source_url: "https://arxiv.org/abs/2206.09745"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "http://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2206.09745](https://arxiv.org/abs/2206.09745)
- **著者:** Jorge Vitório Pereira
- **初回投稿日:** 2022年6月20日
- **最終更新日:** 2023年6月6日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/)

## 要約

本稿は閉meromorphic 1形式と余次元1正則葉層を扱い、前半の解説と後半の新規成果を結ぶ。留数定理、平坦meromorphic接続、Hodge理論が、局所的な葉層の特異点と大域的なKähler幾何を往復する共通言語となる。

第一の新規結果は、射影三次元多様体の特異集合内のコンパクト曲線近傍で定義されたsemi-global separatrixが代数曲面へ閉じるための、Bott接続の留数による判定である。

第二の結果群は、コンパクトKähler曲面上で自明な法束をもつ有効因子に対し、曲線へのfibrationが存在するか、補集合が有限個の曲線の収縮後にSteinとなるという二者択一を与える。さらに数値的自明な法束をもつ滑らかな超曲面の補集合がSteinなら、周囲の多様体は曲面でなければならない。

## 背景と問題設定

閉meromorphic 1形式の留数と極因子は、葉層のCamacho–Sad型指数やseparatrixを記述する。コンパクトKähler多様体ではHodge理論により、形式を単純極をもつ対数形式と留数ゼロの第二種形式へ分解できる。IntroductionはSections 2–6を主に解説的と位置づけ、Sections 7–9に新規結果を置く。

## 主結果

### semi-global separatrixの代数性（Theorem A）

射影三次元多様体$X$上の単純特異点をもつ余次元1葉層$\mathcal F$と、滑らかなsemi-global separatrix $V$を考える。$V$上のBott接続の留数が$\mathbb C/\mathbb Q$内で生成する$\mathbb Z$加群のrankが2以上なら、$V$のZariski閉包は$\mathcal F$不変な代数曲面である。

### 自明な法束をもつ因子（Theorem C）

コンパクトKähler曲面$X$上の連結台をもつ有効因子$I$が

$$
\mathcal O_X(I)\otimes\mathcal O_X/\mathcal O_X(-I)\simeq
\mathcal O_X/\mathcal O_X(-I)
$$

を満たすとする。このとき、$|I|$を一点へ送る曲線への非定数射$f:X\to C$が存在するか、$|I|$と交わらない有限個のコンパクト曲線を収縮した後に$X\setminus|I|$がStein曲面となる。

### Stein補集合の次元制約（Theorem D）

コンパクトKähler多様体$X$の滑らかな超曲面$Y$が数値的自明な法束をもち、$X\setminus Y$がSteinなら$\dim X=2$である。法束を数値次元ゼロのpseudo-effective束へ弱められるかは未解決と明記される。

## 証明の見取り図

Theorem AではBott接続の留数データをsemi-global separatrixの閉包へ結びつける。Theorem Cでは留数をもたない閉meromorphic 1形式の多価原始関数に現れる極因子を調べ、自然な一対の1形式を用いてfibrationとStein化の二者択一を導く。同じ発想を高次元の超曲面へ適用し、Stein補集合と数値的自明な法束の両立が次元2に限られることを示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2206.09745](https://arxiv.org/abs/2206.09745)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems A, C, D; Corollary B
- **論文構成の説明:** Introduction, pp. 1–4
- **確認したarXivバージョン:** v3
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction
