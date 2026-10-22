---
layout: paper
title: On the gap of thresholds
title_ja: 超標準係数集合をもつ曲面対の閾値ギャップ
authors: Yang He, Vyacheslav V. Shokurov
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We propose an algorithm to compute the gap numbers of log canonical thresholds, anticanonical thresholds, and $\mathbb{R}$-complementary thresholds for surface pairs with a given rational hyperstandard coefficient set. As an example, we compute these gap numbers for a special hyperstandard set that appears in the effective boundedness of $n$-complements for surface pairs.
topic: algebraic-geometry
tags:
- singularities
- birational-geometry
arxiv_id: 2610.30020v1
arxiv_url: https://arxiv.org/abs/2610.30020
arxiv_submitted: '2026-10-21'
arxiv_updated: '2026-10-21'
summary: 曲面対の対数標準閾値や実数補完閾値について、一の直下に現れない区間を明示的に求める問題を扱う。一般のDCC係数集合から局所ギャップを評価し、補完の有効有界性に現れる特定の超標準集合では局所に1/252、大域に1/127260というギャップを与える。
abstract_en: ''
summary_en: Ascending chain conditions ensure that threshold values cannot approach one from below without a gap, but they do not themselves specify its size. This paper studies how to compute such gaps for surface pairs with prescribed coefficients. It gives a coefficient-dependent local estimate and explicit constants for one hyperstandard set used in complement theory. The global statements include an equality characterization for a coefficient bound on Picard-rank-one klt pairs.
abstract_ja: 有理超標準係数集合を固定した曲面対について、対数標準閾値、反標準閾値、実数補完閾値のギャップ数を計算するアルゴリズムを提案する。応用として、曲面のn-補完の有効有界性に現れる特定の超標準集合に対するギャップを計算する。Introductionは一般DCC集合に対する局所的評価と、特定集合に対する局所・大域の明示的定数を区別して提示する。
abstract_source_url: https://arxiv.org/abs/2610.30020
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.30020v1](https://arxiv.org/abs/2610.30020)
- **著者:** Yang He, Vyacheslav V. Shokurov
- **初回投稿日:** 2026-10-21
- **最終更新日:** 2026-10-21
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

閾値のACCは、増大し続ける値の列が存在しないことを保証する。しかし有界性を有効な形で使うには、一の直下でどれほどの幅が空くのかを具体的に知る必要がある。本論文は曲面対と係数集合を固定し、このギャップを計算する問題を扱う。

局所的には、係数集合から随伴係数を作り、その係数の和が零や一を初めて超える値を使って対数標準閾値を評価する。一般のDCC集合に対する式と、特定の超標準集合に対する数値を分けて与える。

大域的には、Picard数一のkltな0-pairの係数と、実数補完閾値を扱う。Introductionに現れる $1/252$ と $1/127260$ は同じ対象の二通りの評価ではなく、局所・大域の異なる設定に対応する。本稿が提案する計算アルゴリズムの実装を本記事で実行したわけではない。

## 背景と問題設定

IntroductionのTheorems 1.1、1.2は対数標準閾値とFano型の場合の実数補完閾値のACCに関する既知結果である。係数集合にDCC、すなわち狭義に減少する無限列がないことを要求することで、閾値側のACCが得られる。

これに対し本論文は、その抽象的な離散性から数値的なギャップへ進む。特定の係数集合 $\Gamma(\mathcal N\_1)$ は原文のDefinition 3.8で定義され、曲面の $n$-補完の有効有界性に使われる。Introductionには集合の詳細な列挙がないため、以下の専用定数を任意の係数集合へ適用してはならない。

## 主結果

### 一般係数集合からの局所評価（Theorem 1.4）

$0,1\in\Gamma\subset[0,1]$ をDCC集合とし、随伴係数集合を

$$
\widetilde\Gamma=
\left\lbrace \frac{m-1+\sum n\_ib\_i}{m}\ \middle|\
 m\in\mathbb Z\_{>0},\ n\_i\in\mathbb Z\_{\geq0},\ b\_i\in\Gamma\right\rbrace \cap[0,1]
$$

とする。係数が $\Gamma$ に属するlc曲面対 $(X,B)$ と、非零の有効 $\mathbb Q$-Cartier Weil因子 $F$ に対して、$t=\operatorname{lct}(X,B;F)$ は

$$
t=1\quad\text{または}\quad
t\leq1-\min\left\lbrace \frac13,\frac{\alpha\_0(\widetilde\Gamma)}2,
\alpha\_1(\widetilde\Gamma)-1\right\rbrace
$$

を満たす。ここで $\alpha\_u(\widetilde\Gamma)$ は、$\widetilde\Gamma$ の元の非負整数係数による有限和のうち $u$ より大きいものの最小値である。同じ結論は局所lc曲面対と局所対数標準閾値にも成り立つ。

### 特定集合での局所ギャップ（Corollary 1.5）

上の設定で $B$ の係数を $\Gamma(\mathcal N\_1)$ に限定すると、

$$
t=1\quad\text{または}\quad t\leq1-\frac1{252}
$$

を得る。ここでも $F$ は非零の有効 $\mathbb Q$-Cartier Weil因子であり、局所版にも同じ評価が成り立つ。

### Picard数一のklt 0-pairの係数（Theorem 1.6）

$X$ を $\mathbb Q$-factorialな曲面で $\rho(X)=1$ とし、$(X,B)$ を原文でいうklt 0-pairとする。

$$
B=b\_1F+\sum\_{i=2}^n b\_iD\_i
$$

と書き、$F$ は非零の有効Weil因子、$D\_i$ は互いに異なる素因子、$i\geq2$ で $b\_i\in\Gamma(\mathcal N\_1)$ と仮定する。このとき

$$
b\_1\leq1-\frac1{127260}.
$$

等号は、原論文Example 5.2の対で $F=L\_4$、またはExample 5.3の対で $F=D\_1$ となる場合に限られる。Introductionにはこれらの対の構成が書かれていないため、本記事でもその詳細を推測して補わない。

### 実数補完閾値の大域ギャップ（Theorem 1.7）

係数が $\Gamma(\mathcal N\_1)$ に属し、実数補完をもつ曲面対 $(X,B)$ と非零の有効Weil因子 $F$ に対して、

$$
t=\mathbb R\text{-}\operatorname{ct}(X,B;F)
\quad\Longrightarrow\quad
 t=1\ \text{または}\ t\leq1-\frac1{127260}.
$$

前の定理のPicard数一・kltという仮定を、この定理へ追加する必要はない。一方、補完の存在と係数集合の指定は不可欠な前提である。Introductionは計算アルゴリズムの目的とこれらの結果を述べるが、証明手順の詳しい説明までは与えていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.30020)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.30020v1) — Section 1, pp. 1–3冒頭
- **Introduction中で言及された主要結果:** Theorems 1.4, 1.6, 1.7；Corollary 1.5；Theorems 1.1–1.3は既知結果
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.30020v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
