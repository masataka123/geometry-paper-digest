---
layout: paper
title: "Bogomolov decomposition and compact Kähler manifolds of algebraic dimension zero"
title_ja: "代数次元ゼロのコンパクトKähler多様体とBogomolov分解"
authors: "Frederic Bruno Campana"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove conditionally that compact K\''ahler manifolds of algebraic dimension zero are (essentially) isogeneous to products of Kummer and `simple' ones, the latter being conjecturally bimeromorphically symplectic. `Simple' means: its general point is not contained in a nontrivial subvariety. We also prove that four-dimensional `strictly simple' manifolds are either étale quotients of tori or holomorphically symplectic. `Strictly simple' means: its only subvarieties are points and itself.
topic: algebraic-geometry
tags:
  - hyperkahler-geometry
arxiv_id: "2605.19713v2"
arxiv_url: "https://arxiv.org/abs/2605.19713"
arxiv_submitted: "2026-05-19"
arxiv_updated: "2026-06-29"
summary: >-
  代数次元ゼロのコンパクトKähler多様体を、Kummer型と単純多様体から組み立てる条件付き分類を与える。中心となる変形不変性の予想の下でMRC商に双有理的Bogomolov分解を与え、無条件には厳密単純な4次元多様体が単純トーラスのエタール商または既約hyperkähler多様体であることを示す。
abstract_en: ""
summary_en: >-
  The paper develops a bimeromorphic decomposition scheme for compact Kähler manifolds with no nonconstant meromorphic functions. Conditional on an isotriviality conjecture for fibrations with simple fibers, their maximal rationally connected quotients split up to finite correspondence into Kummer and simple non-Kummer factors. A separate unconditional argument classifies strictly simple Kähler fourfolds as étale torus quotients or irreducible hyperkähler manifolds.
abstract_ja: >-
  代数次元ゼロのコンパクトKähler多様体について、Kummer多様体と単純多様体の積に本質的にisogenousであるという条件付き結果を証明する。単純とは一般点が非自明な部分多様体に含まれないことを意味し、非Kummerの単純因子は双有理シンプレクティックであると予想される。また、部分多様体が点と全体しかない厳密単純4次元多様体は、トーラスのエタール商または正則シンプレクティック多様体であることを示す。
abstract_source_url: "https://arxiv.org/abs/2605.19713"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.19713](https://arxiv.org/abs/2605.19713)
- **著者:** Frederic Bruno Campana
- **初回投稿日:** 2026年5月19日
- **最終更新日:** 2026年6月29日（v2）
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト複素多様体 $X$ の代数次元 $a(X)$ は有理型関数体の超越次数であり、$a(X)=0$ は射影的な場合と対極にある。Kähler類ではBarlet–Chow空間のコンパクト性により部分多様体族から自然なfibrationを作れるため、一般の分類をこの極端な場合へ還元できる。

本論文は、一般点が非自明な部分多様体に含まれない「単純」多様体と、トーラスの有限商に双有理なKummer多様体を基本因子とする。単純ファイバーをもつfibrationの変動が消えるというConjecture 3.2の下で、$a(X)=0$ の多様体のMRC商に有限群商としての分解を与える。

条件付き分類とは別に、部分多様体が点と全体だけである厳密単純Kähler 4-foldを無条件に分類する。この結果は、既約hyperkähler多様体と単純トーラスのエタール商以外の可能性を排除する。

## 背景と問題設定

$X$ と $X'$ がともに代数次元ゼロで、両者へgenerically finiteな既約対応が存在するときisogeneousと呼ぶ。半単純多様体は単純多様体の積にisogeneousなもの、Kummer多様体は複素コンパクトトーラス $T$ の有限群商 $T/G$ に双有理なものとして区別される。

分類の主要な未解決点は、単純コンパクトKähler多様体がKummer型または双有理的既約シンプレクティック型であるというConjecture 3.1と、単純な一般ファイバーをもつ代数次元ゼロのfibrationがisotrivialであるというConjecture 3.2である。

## 主結果

### 厳密単純4次元多様体の分類（Theorem 5）

厳密単純なコンパクトKähler 4-fold $X$ は、単純トーラスのエタール商であるか、既約hyperkähler多様体である。これは予想を仮定しない結論であり、次元2・3で知られていた像を次元4へ拡張する。

### 代数次元ゼロの場合の条件付き分解（Theorem 7）

$X$ をFujiki class $\mathcal C$ に属し $a(X)=0$ とする。Conjecture 3.2を仮定すると、MRC fibration $\sigma_X:X\dashrightarrow\Sigma$ のファイバーはunirational prehomogeneousであり、

$$
\Sigma=(S\times K)/G
$$

と表される。ここで $K$ はKummer、$S$ は非Kummer単純多様体の積、$G$ は有限自己同型群である。さらにConjecture 3.1も仮定すれば、$S$ は双有理的既約シンプレクティック多様体の積にisogeneousとなる。

## 証明の見取り図

条件付き分解では、Barlet–Chow空間から得る半単純還元とKummer還元を組み合わせ、単純ファイバーの変動消滅を使って有限基底変換後の積構造へ進む。厳密単純4次元の場合は、標準束の擬有効性、Takegoshi型Hard Lefschetz、正則2形式・3形式が定めるfoliationを用い、標準束がtorsionでない場合を排除してBogomolov分解へ帰着する。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.19713](https://arxiv.org/abs/2605.19713)
- **Introduction:** Section 2, pp. 2–5
- **主要結果:** Theorem 5, Theorem 7
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
