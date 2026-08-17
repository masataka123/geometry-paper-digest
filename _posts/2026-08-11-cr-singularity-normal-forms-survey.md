---
layout: paper
title: "A survey on normal forms of real submanifolds with CR singularity"
title_ja: "CR特異点をもつ実部分多様体の標準形理論"
authors: "Xianghong Gong, Laurent Stolovitch"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.DS
topic: several-complex-variables
tags:
  - singularities
  - cr-geometry
arxiv_id: "2605.13157v1"
arxiv_url: "https://arxiv.org/abs/2605.13157"
arxiv_submitted: "2026-05-13"
arxiv_updated: "2026-05-13"
summary: >-
  CR特異点をもつ実解析的部分多様体の局所正則分類を、BishopとMoser--Webster以後の標準形理論から概観するサーベイである。Bishop不変量による型分け、可逆力学系への翻訳、収束・発散現象と未解決問題を結び付けて整理する。
abstract_en: ""
summary_en: >-
  This survey organizes normal-form results for real-analytic submanifolds at CR singularities. It begins with the Bishop and Moser--Webster theories and explains how local holomorphic classification can become a problem about reversible holomorphic dynamics. The account compares elliptic, parabolic, and hyperbolic regimes, discusses both minimal and maximal complex-tangent dimensions, and records open classification and convergence problems.
abstract_ja: >-
  本稿は、CR特異点をもつ実部分多様体の標準形に関する古典的成果と近年の進展をまとめる。Bishopの研究とMoser--Webster理論を起点に、複素接点の型に応じた局所正則分類、可逆写像の力学系、標準化写像の収束、小除数現象、正則包を扱い、今後の問題も列挙する。
abstract_source_url: "https://arxiv.org/abs/2605.13157"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.13157v1](https://arxiv.org/abs/2605.13157v1)
- **著者:** Xianghong Gong, Laurent Stolovitch
- **初回投稿日:** 2026年5月13日
- **最終更新日:** 2026年5月13日（v1）
- **主分類・副分類:** math.CV（主分類）, math.DS
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

実解析的部分多様体 $M\subset\mathbb C^n$ では、複素接空間 $T_x^{(1,0)}M$ の次元が局所的に一定なら $M$ は CR 部分多様体であり、その次元が跳ぶ点が CR 特異点（複素接点）である。本サーベイは、そのような点の近傍で $M$ を局所双正則変換により分類する標準形問題を扱う。

最小の複素接次元をもつ基本模型は Bishop quadric

$$
Q_\gamma:\quad z_n=z_1\bar z_1+\gamma(z_1^2+\bar z_1^2),\qquad
\operatorname{Im}z_2=\cdots=\operatorname{Im}z_{n-1}=0
$$

である。Bishop不変量 $\gamma$ により、原点は $0\leq\gamma<1/2$ で楕円型、$\gamma=1/2$ で放物型、$\gamma>1/2$ で双曲型に分かれる。この区別は単なる二次近似の分類にとどまらず、標準形の収束性や解析的モジュライの性質を左右する。

$\gamma\neq0$ の Moser--Webster 理論では、複素化した部分多様体に二つの正則対合 $\tau_1,\tau_2$ と反正則対合 $\rho$ が現れ、$\tau_2=\rho\tau_1\rho^{-1}$ を満たす。したがって部分多様体の正則・形式分類は、この対合系、特に可逆写像 $\sigma=\tau_2\tau_1$ の分類へ移される。ここに多変数複素解析と可逆力学系、KAM型現象、小除数問題との接点が生じる。

Introductionは新しい単一の主定理を掲げるのではなく、楕円・放物・双曲型、Moser--Webster理論が破綻する $\gamma=0$、例外的双曲型、最小および最大CR特異次元を横断して既知の標準形結果を配置する。最後には、標準形の収束、Bishop quadricへの同値性の最適条件、Levi-flat部分多様体や体積保存変換の下での分類などを未解決問題として提示する。

## 背景と問題設定

Chern--Moser理論はLevi非退化実超曲面について、まず形式標準形を構成し、それが収束する局所双正則写像で実現できることを示した。一方、CR特異点をもつ実部分多様体は余次元が少なくとも2であり、超曲面の理論をそのまま適用できない。そこで「形式同値が正則同値を導くか」「分類を担う不変量とモジュライは何か」が中心問題となる。

本稿が強調する仕組みは複素化である。$\gamma\neq0$ の場合、二つの射影が2対1分岐被覆となり、そのdeck変換が $\tau_1,\tau_2$ を与える。この有限個の対合から得られる可逆力学系を調べることで、実部分多様体の幾何を正則力学系の標準形問題として扱える。

## 主結果の見取り図

本稿はサーベイであり、Introductionには論文固有の番号付き主定理は置かれていない。代わりに、次の成果群が全体の軸として示される。

### Bishop--Moser--Webster理論

Bishop不変量による楕円・放物・双曲型の分類と、$\gamma\neq0$ の部分多様体を対合系へ対応させるMoser--Websterの構成が基礎となる。とくに形式分類と正則分類の差は、対応する可逆写像の正規化が収束するかという問題に現れる。

### 型ごとの分類とモジュライ

楕円型では収束する標準化、双曲型では非例外・例外の場合の違いとKAM型不変曲線、放物型ではVoronin型の無限次元モジュライが論じられる。また、複素接空間が最大次元となる場合には、可換的CR特異点の正規化、正則包、付随複素部分多様体が扱われる。

### 未解決問題

Introductionが予告する最終節では、$\gamma=0$ の標準形の収束、$\gamma>1/2$ で $Q_\gamma$ と同値になるための最適条件、高次元分類、Levi-flat CR特異点、体積保存同値などが今後の課題として整理される。これらは本稿で証明された新定理ではなく、既存理論の到達点から抽出された問題である。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.13157v1](https://arxiv.org/abs/2605.13157v1)
- **Introduction:** Section 1, pp. 2--4
- **Introduction中で言及された主要定理番号:** 論文固有の番号付き主定理なし
- **論文構成の説明:** pp. 3--4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
