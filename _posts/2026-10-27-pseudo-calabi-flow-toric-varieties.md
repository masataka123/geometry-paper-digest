---
layout: paper
title: Pseudo-Calabi Flow on Toric Variety
title_ja: トーリック多様体上のpseudo-Calabi流の長時間存在と収束
authors: Junhao Tian, Kai Zheng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
arxiv_abstract: In this paper, we prove the long time existence of the pseudo-Calabi flow on a compact toric variety for any $T^n$-invariant initial K\"ahler metric. If the Mabuchi functional is proper modulo automorphisms, the flow converges exponentially to a constant scalar curvature K\"ahler (cscK) metric. In particular, this gives a flow proof that properness of the K-energy implies the existence of a cscK metric in the toric setting.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- toric-geometry
- curvature
- monge-ampere-equations
arxiv_id: 2610.34340v1
arxiv_url: https://arxiv.org/abs/2610.34340
arxiv_submitted: '2026-10-25'
arxiv_updated: '2026-10-25'
summary: 滑らかなコンパクトトーリック多様体上で、任意のトーラス不変初期計量からpseudo-Calabi流が全時間存在することを示す。Mabuchi汎関数が自己同型群を法としてproperなら、既にcscK計量があると仮定せず、流自体がcscK計量へ指数的に収束する。
abstract_en: ''
summary_en: The paper uses pseudo-Calabi flow to approach canonical metrics in a toric Kähler class. Smooth torus-invariant initial data lead to a global solution without an additional energy hypothesis. Properness of the Mabuchi functional then provides a sufficient condition for exponential convergence to a constant-scalar-curvature metric. The convergence statement concerns the original metric flow, rather than only a sequence adjusted by changing automorphisms.
abstract_ja: コンパクトで滑らかなトーリック多様体上のpseudo-Calabi流を扱う。任意の滑らかなトーラス不変初期計量から長時間解を構成する。またトーラス不変ポテンシャル空間でMabuchi汎関数が自己同型群を法としてproperであれば、流はcscK計量へ滑らかに指数収束する。既存のcscK計量を仮定せず、流を用いてその存在を得る。
abstract_source_url: https://arxiv.org/abs/2610.34340
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34340v1](https://arxiv.org/abs/2610.34340)
- **著者:** Junhao Tian, Kai Zheng
- **初回投稿日:** 2026-10-25
- **最終更新日:** 2026-10-25
- **主分類・副分類:** math.DG（主分類）; math.AP
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

cscK計量を求める一つの方法は、スカラー曲率のずれを減らす流を動かすことである。本論文のpseudo-Calabi流は、曲率の差にLaplacianの逆を作用させる。非局所的な項を含む一方、ポテンシャルについては形式的に二階の発展方程式となる。

著者らはトーリック設定で、滑らかなトーラス不変初期計量を任意に選んでも流が全時間存在することを示す。長時間存在の段階にはMabuchi汎関数のproper性を仮定しない。さらにproper性があれば、流はcscK計量へ指数的に収束する。

ここでcscK計量の存在を収束定理の前提に置かない点が重要である。途中では自己同型による正規化で評価を得るが、最終的な結論は元の計量流自体の収束である。トーリック幾何の境界構造を用いて非局所項を制御することが、この流による存在証明を支える。

## 背景と問題設定

$\omega\_\varphi=\omega\_0+dd^c\varphi$、$dd^c=\sqrt{-1}\partial\bar\partial$ とする。スカラー曲率を $R\_{\omega\_\varphi}$、その平均を $\overline R$ とすると、pseudo-Calabi流は

$$
\partial\_t\varphi=\Delta\_\varphi^{-1}(\overline R-R\_{\omega\_\varphi})
$$

で定まる。逆作用素には平均零の正規化を用い、ポテンシャルに時間のみの関数を加えても計量流は変わらない。

$F=\log(\omega\_\varphi^n/\omega\_0^n)$ と置くと、適切な加法定数のもとで

$$
\partial\_t\varphi=F+P,\qquad
\Delta\_\varphi P=\overline R-\operatorname{tr}\_{\omega\_\varphi}\operatorname{Ric}(\omega\_0),
\qquad \int\_M P\omega\_\varphi^n=0
$$

という表示を使える。$P$ はその時点の計量に依存する楕円型方程式の解であり、これを一様楕円性の先取りなしに制御することが課題となる。

## 主結果

### 任意の不変初期計量からの長時間存在（Theorem 1.1）

$M$ を滑らかなコンパクトトーリック多様体とする。任意の滑らかな $T^n$ 不変Kähler初期計量に対し、pseudo-Calabi流の一意な滑らかな解が全ての $t\ge0$ で存在する。

初期計量がcscK計量に近いことも、proper性も、この定理の仮定ではない。従来の局所的な安定性から任意の初期計量を扱うためには、有限時間で特異性が生じないことを別途証明する必要がある。

### proper性から指数収束へ（Theorem 1.2）

Kähler類を固定し、$G=\operatorname{Aut}\_0(M)$ とする。$E$ 汎関数を零に正規化したトーラス不変ポテンシャル空間 $\mathcal H\_0^T$ 上で、Mabuchi汎関数が $G$ を法としてproperであると仮定する。Definition 1.2のproper性は下方有界性と、群を法とする距離 $d\_{1,G}$ が無限大に発散すれば汎関数も無限大になることを要求する。

このとき任意の滑らかな不変初期計量からの流は、トーラス不変cscK計量 $\omega\_\infty$ へ $C^\infty$ で時間に関して指数的に収束する。計量だけでなく、$E=0$ に正規化したポテンシャルも収束する。

proper性はIntroductionに記載された意味でmoment polytopeの $L^1$ 安定性と同値である。$G$ は複素化トーラスより大きいことがあり、最初から両群を同一視してはいけない。またcscK計量の存在は仮定ではなく結論として得られる。

## 証明の見取り図

有限時間の評価では、対数座標での凸な重みから体積比の $L^p$ 制御を得る。補助的な放物型Monge–Ampère方程式と最大値原理により $P$ と体積比を評価する。さらに $P$ から局所ポテンシャルを引いた調和部分の振幅を、トーリックな部分レベル領域上で調べる。Guilleminの境界公式と凸性が、polytopeの全ての境界層で議論を成立させる。

収束については、まず $G$ を法とするproper性を複素化トーラスを法とする評価へ還元する。Mabuchi汎関数の減少から距離とentropyを制御し、$P$ の負方向の指数評価と体積比の一様可積分性を得る。散逸が小さくなる時刻列でcscK極限を作った後に、既存の局所安定性を一つの固定された自己同型のもとで適用し、元の流の指数収束を導く。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34340)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34340v1) — Section 1, pp. 1–6冒頭（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2; Definition 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34340v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
