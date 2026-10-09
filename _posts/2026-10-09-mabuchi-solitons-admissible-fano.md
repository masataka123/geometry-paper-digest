---
layout: paper
title: Mabuchi solitons and Mabuchi constants on Fano admissible manifolds
title_ja: Fano admissible多様体上のMabuchiソリトンとMabuchi定数
authors: Shotaro Murayama, Yasufumi Nitta
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper, we study the existence of Mabuchi solitons on admissible manifolds as defined by Apostolov--Calderbank--Gauduchon--T\o nnesen-Friedman. We prove that a Fano admissible manifold admits a Mabuchi soliton if and only if the Mabuchi constant is less than 1. We also provide an explicit formula for the Mabuchi constant on Fano admissible manifolds, which generalizes that of Mabuchi. Using this formula, we completely determine the existence and non-existence of Mabuchi solitons on Fano admissible manifolds over the complex projective space $\mathbf{P}^{n}$.
topic: differential-geometry
tags:
- fano-varieties
- kahler-einstein-metrics
- k-stability
arxiv_id: 2604.23261v2
arxiv_url: https://arxiv.org/abs/2604.23261
arxiv_submitted: '2026-04-25'
arxiv_updated: '2026-10-08'
summary: Fano admissible多様体では、Mabuchi定数が1未満であることがMabuchiソリトンの存在の必要十分条件になる。特性多項式の三つの積分で定数を計算し、射影空間上の該当する射影束について存在例を完全に特定する。
abstract_en: In this paper, we study the existence of Mabuchi solitons on admissible manifolds as defined by Apostolov--Calderbank--Gauduchon--T\o nnesen-Friedman. We prove that a Fano admissible manifold admits a Mabuchi soliton if and only if the Mabuchi constant is less than 1. We also provide an explicit formula for the Mabuchi constant on Fano admissible manifolds, which generalizes that of Mabuchi. Using this formula, we completely determine the existence and non-existence of Mabuchi solitons on Fano admissible manifolds over the complex projective space $\mathbf{P}^{n}$.
summary_en: ''
abstract_ja: MabuchiソリトンはKähler–Einstein計量を一般化する標準計量であり、その存在にはMabuchi定数が1未満であることが必要である。本論文はFano admissible多様体でこの条件が十分でもあることを示す。さらに、Mabuchi定数を特性多項式の積分で表す公式を一般の束の階数に拡張し、射影空間を底とする場合の存在・非存在を決定する。
abstract_source_url: https://arxiv.org/abs/2604.23261
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **原題:** Mabuchi solitons and Mabuchi constants on Fano admissible manifolds
- **著者:** Shotaro Murayama, Yasufumi Nitta
- **arXiv:** [2604.23261v2](https://arxiv.org/abs/2604.23261)
- **初回投稿日 / 更新日:** 2026-04-25 / 2026-10-08
- **主分類:** math.DG
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)。著作権は原著者等の権利者に帰属する。

## 要約

Kähler–Einstein計量が存在しないFano多様体でも、より広い標準計量であるMabuchiソリトンを考えることができる。その存在を妨げる数値がMabuchi定数であり、ソリトンが存在すれば必ず1未満になる。

本論文はadmissibleと呼ばれる構造を持つFano多様体に限定し、この必要条件が十分条件にもなることを証明する。解析的な存在問題を一つの数値条件で決定できる点が中心である。

さらに、定数を特性多項式の低次モーメントで明示する。射影空間上のadmissibleな射影束では、その公式からソリトンを持つものを分類し、残りでは相対Ding不安定性まで導く。

## 背景と問題設定

<p>Fano多様体 $X$ 上で、$2\pi c_1(X)$ を表す極大コンパクト群 $G$ 不変のKähler計量 $\omega$ を考える。正規化したRicciポテンシャルを $h_\omega$ とすると、Mabuchiソリトンの条件は $\operatorname{grad}_\omega(1-e^{h_\omega})$ が実正則ベクトル場であることである。Killingポテンシャルへの $L^2$ 射影を $\Pi_\omega^G$ と書けば、Mabuchi定数は</p>

<div>
$$
M_X=\max_X\Pi_\omega^G(1-e^{h_\omega})
$$
</div>

<p>であり、選んだ計量に依存しない。</p>

<p>対象は $X=\mathbb P_Y(E_0\oplus E_\infty)$ である。底は単連結コンパクトKähler多様体の積で被覆され、$E_0,E_\infty$ は階数 $d_0+1,d_\infty+1$ の射影的平坦Hermitian正則束で、規定の第一Chern類の差を満たす。底の各因子をRicci正のKähler–Einstein計量とし、$\operatorname{Ric}(\omega_a)=\varepsilon_as_a\omega_a$ と書く。Fano条件は $\varepsilon_a=1$ のとき $s_a>d_0+1$、$\varepsilon_a=-1$ のとき $s_a\lt-(d_\infty+1)$ である。</p>

<p>束の第一Chern類の条件は、底から引き戻されるKähler形式を用いて次のように与えられる。</p>

<div>
$$
\frac{c_1(E_\infty)}{d_\infty+1}-\frac{c_1(E_0)}{d_0+1}
=\left[\frac{\omega_Y}{2\pi}\right],\qquad
\omega_Y=\sum_{a\in A}\varepsilon_a\omega_a.
$$
</div>

## 主結果

### 主定理1：存在の数値的特徴付け（Theorem 1.1）

<div>
$$
X\text{ がMabuchiソリトンを持つ}\quad\Longleftrightarrow\quad M_X\lt1
$$
</div>

これは上記のFano admissible多様体に対する同値である。一般のFano多様体について必要条件を十分条件へ広げた主張ではない。Introductionは、より一般のv-solitonの存在理論を通じて十分性を示すと説明する。

### 主定理2：Mabuchi定数の公式（Theorem 1.2）

<p>$\Omega=2\pi c_1(X)$ とし、次の量を定義する。</p>

<div>
$$
x_a=\frac{d_0+d_\infty+2}{2s_a+d_\infty-d_0},\qquad
p_\Omega(x)=(1+x)^{d_0}(1-x)^{d_\infty}\prod_{a\in A}\left(\frac{\varepsilon_a}{x_a}+\varepsilon_ax\right)^{d_a},
$$
$$
b_i=\int_{-1}^{1}x^ip_\Omega(x)\,dx\quad(i=0,1,2),\qquad
w=\frac{d_0-d_\infty}{d_0+d_\infty+2}.
$$
</div>

<p>するとMabuchi定数は</p>

<div>
$$
M_X=\frac{b_0|b_1-wb_0|-b_1(b_1-wb_0)}{b_0b_2-b_1^2}
=1+\frac{b_0\bigl(|b_1-wb_0|-(b_2-wb_1)\bigr)}{b_0b_2-b_1^2}.
$$
</div>

<p>従来の $d_0=d_\infty=0$ の公式を、一般の束の階数へ拡張したものである。</p>

### 主定理3：射影空間上での分類（Theorem 1.3）

<p>$k\ge1$、$n+1>k(d_0+1)$ の下で、</p>

<div>
$$
X=\mathbb P_{\mathbb P^n}\left(\mathcal O^{\oplus(d_0+1)}\oplus\mathcal O(k)^{\oplus(d_\infty+1)}\right)
$$
</div>

<p>がMabuchiソリトンを持つのは、$(k,d_\infty)=(1,0)$ または $(n,k,d_0,d_\infty)=(1,1,0,1)$ の場合に限る。他の場合には $M_X>1$ である。</p>

<p>Corollary 1.4は、同じ条件が一様相対Ding安定性とも同値であり、それ以外では相対Ding不安定であるとする。この帰結には、Introductionが引用する既存のYau–Tian–Donaldson型対応を用いる。</p>

## 証明の見取り図

Fano admissible多様体では、admissible v-solitonの存在をv-Futaki不変量の消滅と同値にする。Mabuchiソリトンに対応する不変量は常に消滅するため、重みの正値性を表すMabuchi定数の条件から存在へ進める。

定数の計算ではadmissible計量のRicciポテンシャルとモーメント写像の正規化を明示し、特性多項式の積分へ帰着する。最後に射影空間上の束に公式を適用して条件を判定する。これらはIntroductionの構成説明に基づく見取り図であり、後続節の計算を独立に検証したものではない。

## 原論文との対応

- **Abstractページ:** [2604.23261](https://arxiv.org/abs/2604.23261)
- **PDF:** [2604.23261v2](https://arxiv.org/pdf/2604.23261v2)
- **Introduction:** Section 1, pp. 1–4
- **主要結果:** Theorems 1.1–1.3, Corollary 1.4
- **確認バージョン:** 2604.23261v2
- **確認ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction。後続節の証明全体の精読・独立検証は行っていない。
