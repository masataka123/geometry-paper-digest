---
layout: paper
title: Local Rigidity of Bergman Logarithmic Flatness on Compact Hermitian Symmetric Spaces
title_ja: コンパクトHermite対称空間上のBergman対数平坦性の局所剛性
authors: Zhiqin Lu, Yuang Shi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
- math.RT
arxiv_abstract: We prove the local rigidity of Bergman logarithmic flatness near the standard metrics associated with fixed invariant positive polarizations on compact Hermitian symmetric spaces. Every sufficiently small smooth deformation preserving Bergman logarithmic flatness is induced by a holomorphic automorphism and a constant rescaling. This establishes a Bergman analogue of the local rigidity results for Szegő logarithmic flatness obtained by Lu--Tian (Duke Math. J., 2004) and, more recently, Loi--Palmieri--Zuddas (2026).
topic: differential-geometry
tags:
- cr-geometry
- curvature
arxiv_id: 2611.14507v1
arxiv_url: https://arxiv.org/abs/2611.14507
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: 固定した正の偏極をもつコンパクトHermite対称空間で、Bergman対数平坦性を保つ小変形が自己同型と定数倍に限られることを示す。無限個の係数消滅を有限個の連続した係数条件へ置き換え、線形化に残る対称性以外の方向を非線形障害で排除する。
abstract_en: ''
summary_en: The question is whether a boundary condition on a Bergman kernel can recognize a symmetric metric locally. The authors work with a fixed positive polarization and analyze small changes of its Hermitian metric. Finitely many coefficient equations already suffice for rigidity. The key issue is that some infinitesimal solutions do not come from automorphisms, so higher-order obstructions are needed.
abstract_ja: 対称空間上の標準的な正の線束計量を、Bergman核の境界対数項の消滅によって局所的に特徴づける。対象の計量を十分小さく変形してもその消滅が保たれるなら、変形は正則自己同型による引き戻しと定数倍から生じる。結果はコンパクト型の既約因子の積に加え、平坦トーラス因子を含む場合にも及ぶ。Szegő対数平坦性について知られた局所剛性に対応するBergman側の定理である。
abstract_source_url: https://arxiv.org/abs/2611.14507
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.14507v1](https://arxiv.org/abs/2611.14507)
- **著者:** Zhiqin Lu, Yuang Shi
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.DG（主分類）; math.CV, math.RT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正の線束の双対側に作る円板束では、Bergman核の境界展開に対数項が現れる。その対数項が無限位数で消えるという条件が、底空間の計量をどこまで決めるかが本論文の問題である。

固定した不変な正の偏極を備えるコンパクトHermite対称空間では、標準計量の十分小さい変形がBergman対数平坦性を保つなら、正則自己同型と定数倍による変形に限られる。しかも、対数平坦性に相当する無限個の条件を全て課す必要はなく、有限個の連続したBergman係数の消滅で足りる。

線形化だけで証明が終わるとは限らない。対称性から来ない無限小変形が残る型があり、それらが実際の変形へ積分できないことを非線形の障害で示す。積や平坦トーラス因子を許す拡張でも、変形ポテンシャル自体に因子ごとの分離を仮定しない。

## 背景と問題設定

正の線束 $(L,h)$ の曲率を $\omega=-i\partial\bar\partial\log h$ とする。標準束で捩ったBergman核の展開を

$$
B\_k^{K\_M}\sim\left(\frac{k}{2\pi}\right)^n\sum\_{j\ge0}a\_j^{K\_M}k^{-j}
$$

と書く。IntroductionのTheorem 1.1として引用される既知の結果では、円板束境界のBergman対数平坦性は $a\_{n+2+j}^{K\_M}=0$ が全ての $j\ge0$ で成り立つことと同値である。

基準計量 $h\_0$ に対して $h\_\varphi=h\_0e^{-\varphi}$、$\omega\_\varphi=\omega\_0+i\partial\bar\partial\varphi$ と置く。既約コンパクト型では $L=\mathcal O\_M(1)$ を豊富生成元とし、標準計量を基準とする。

## 主結果

### 既約空間の局所剛性（Theorem 1.3）

既約コンパクトHermite対称空間で、十分小さい滑らかな変形が適切な有限個の係数を消すなら

$$
h\_\varphi=C F^\ast h\_0,\qquad C>0,\quad F\in\operatorname{Aut}\_0(M,L)
$$

となる。正確には、任意の $0<\alpha<1$ に対し $J\ge n+2$、$s\ge2$、$\varepsilon>0$ が存在し、$\omega\_\varphi>0$、$\Vert\varphi\Vert\_{C^{s,\alpha}}<\varepsilon$ および

$$
a\_{n+2}^{K\_M}(h\_\varphi)=\cdots=a\_J^{K\_M}(h\_\varphi)=0
$$

を仮定すればよい。十分小さいという局所性と固定した偏極の条件を外した大域的分類ではない。

### 共通線形化核（Theorem 1.4）

根系のパラメータを $(r,a,b)$ とし、球面的表現の実部分を $V\_{\mathbf s}^{\mathbb R}$ と書く。共通線形化核は、$a$ が奇数なら

$$
\mathbb R1\oplus V\_{(1)}^{\mathbb R},
$$

偶数なら

$$
\mathbb R1\oplus V\_{(1)}^{\mathbb R}\oplus\bigoplus\_{q=2}^{r}V\_{(1^q)}^{\mathbb R}
$$

となる。初めの二項は定数倍と正則自己同型の方向である。偶数の場合の追加項が、線形化の核だけから剛性を結論できない理由となる。

### 係数ブロックの始点（Theorem 1.5）

既約の場合、任意に指定した $q\ge n+2$ から始まる有限ブロック $a\_q^{K\_M},\ldots,a\_J^{K\_M}$ の消滅でも同じ剛性が成り立つ。必要な $J,s,\varepsilon$ は始点 $q$ に依存してよい。

### 積とトーラス因子（Theorem 1.6）

$M=T\times M\_1\times\cdots\times M\_l$ とし、$T$ は平坦複素トーラス、各 $M\_i$ は既約コンパクト型とする。正の偏極と基準計量を

$$
L=L\_T\boxtimes L\_1^{d\_1}\boxtimes\cdots\boxtimes L\_l^{d\_l},\qquad
h\_0=h\_T\boxtimes h\_1^{d\_1}\boxtimes\cdots\boxtimes h\_l^{d\_l}
$$

と固定する。$h\_T$ の曲率は平行移動不変である。この一般の場合も、任意の始点 $q\ge n+2$ に対する有限係数条件から同じ結論を得る。純粋なトーラス $M=T$ では一つの係数、すなわち $J=q$ で十分であり、結論は $h\_\varphi=Ch\_0$ に強まる。

## 証明の見取り図

まず多重度自由な表現分解でBergman係数の線形化を球面的成分ごとに計算し、その共通核を決定する。楕円性を用いて無限系と同じ核をもつ有限次数方程式を作り、対称性の方向を除いた後、陰関数定理で問題を有限次元の実解析的なグラフへ移す。

余分な核がない場合はここで剛性が得られる。残る場合には、最高ウェイトとToeplitz作用素のCartan積恒等式を使い、非自明な変形曲線に沿うBergman核のTaylor係数が特定の極をもつことを示す。一方、有限個の連続した係数の消滅はその極を排除する。実解析的曲線選択を介したこの矛盾が、無限小解の非線形障害となる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.14507)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.14507v1) — Section 1, pp. 1–7
- **Introduction中で言及された主要結果:** Theorems 1.3–1.6（Theorem 1.1は既知の判定条件）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.14507v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
