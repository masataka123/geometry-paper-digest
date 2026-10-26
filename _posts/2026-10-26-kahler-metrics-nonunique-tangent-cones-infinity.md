---
layout: paper
title: A complete Kähler metric on $\mathbb{C}^n$ of nonnegative Ricci curvature with Euclidean volume growth and nonunique asymptotic cone
title_ja: 非負Ricci曲率とEuclid的体積増大を持つKähler計量の無限遠接錐の非一意性
authors: Jiwei Dai, Wancheng Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We construct complete smooth K\"ahler metrics on $\mathbb{C}^n$ , $n\ge2$, with nonnegative Ricci curvature, Euclidean volume growth, and nonunique tangent cones at infinity. More generally, we prescribe the entire tangent cone set within a class of smooth Hopf cones, using a compact connected family of positive transverse Ricci forms on $\mathbb{C}\mathbb{P}^{n-1}$. We identify all metric blow-downs and their Ricci currents, compute the exact asymptotic volume ratio, and classify isometries between the model cones. In particular, the K\"ahler condition does not ensure uniqueness at infinity under nonnegative Ricci curvature and Euclidean volume growth, even in complex dimension two.
topic: differential-geometry
tags:
- noncompact-kahler-geometry
- curvature
- metric-limits
- kahler-einstein-metrics
arxiv_id: 2610.32734v1
arxiv_url: https://arxiv.org/abs/2610.32734
arxiv_submitted: '2026-10-23'
arxiv_updated: '2026-10-23'
summary: 標準的な複素多様体 $\mathbb C^n$ 上で、非負Ricci曲率とEuclid的体積増大を持ちながら無限遠接錐が一意でない完備Kähler計量を構成する。任意の $n\ge2$ で成り立ち、標準Hopf作用に由来する錐の一定の族については接錐集合全体を指定できる。
abstract_en: ''
summary_en: Nonnegative Ricci curvature and maximal volume growth force blow-down limits to be cones, but need not determine a unique cone. The authors construct this nonuniqueness on standard complex affine space while retaining a complete Kähler metric. Their realization theorem prescribes a compact connected family of smooth Hopf-cone models and fixes the asymptotic volume ratio. Slow variation of transverse data is combined with a smooth filling near the origin.
abstract_ja: 複素次元2以上の $\mathbb C^n$ 上に、非負Ricci曲率、Euclid的体積増大、互いに等長でない無限遠接錐を持つ滑らかな完備Kähler計量を構成する。より一般に、$\mathbb P^{n-1}$ 上の正な横断的Ricci形式のコンパクト連結族によって、標準Hopf錐の範囲で接錐集合全体を指定する。計量の拡大縮小極限とRicciカレントを同定し、漸近体積比を計算する。Kähler条件を加えても、この曲率と体積の仮定だけでは無限遠の一意性が従わないことを示す。
abstract_source_url: https://arxiv.org/abs/2610.32734
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.32734v1](https://arxiv.org/abs/2610.32734)
- **著者:** Jiwei Dai, Wancheng Zhang
- **初回投稿日:** 2026-10-23
- **最終更新日:** 2026-10-23
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

完備非コンパクト多様体を遠くから見るように計量を縮小すると、無限遠の接錐が現れる。非負Ricci曲率とEuclid的な体積増大は極限が錐になることを保証するが、異なる縮小列が同じ錐を与えるとは限らない。本論文は、この非一意性がKähler幾何でも起こることを示す。

構成される計量は標準的な複素構造を持つ $\mathbb C^n$ 上にあり、任意の $n\ge2$ で滑らかかつ完備である。Ricci曲率は非負で、漸近体積比を指定でき、無限遠には少なくとも二つの非等長な接錐が現れる。

より強い実現定理は、標準Hopfファイブレーションに適合する錐のコンパクト連結族を接錐集合として実現する。Ricci平坦な接錐が存在する場合の剛性結果とは異なる状況を扱い、任意の特異錐や任意のReeb作用を実現するとは主張しない。

## 背景と問題設定

Cheeger–Coldingの理論は、非負Ricci曲率とEuclid的体積増大の下でblow-down極限が距離錐になることを示す。一方、PerelmanやColding–Naberの構成は一般のRiemann幾何での非一意性を示す。本論文の課題は、全体にKählerポテンシャルを持つという制約と曲率条件を両立させることである。

$Y=\mathbb P^{n-1}$ 上で $\operatorname{Ric}(\omega\_0)=n\omega\_0$ と正規化し、$0<a<1$、$\kappa=n(1-a)$ とする。滑らかな正の閉実 $(1,1)$ 形式 $\alpha$ で $[\alpha]=\kappa[\omega\_0]$ を満たすものの空間を $\mathcal P\_\kappa$ と書く。各形式に対する横断的方程式は

$$
\beta\_\alpha=a\omega\_0+dd\_Y^c\varphi\_\alpha,\qquad
\operatorname{Ric}(\beta\_\alpha)=n\beta\_\alpha+\alpha
$$

であり、対応するHopf錐のポテンシャルは $V\_\alpha(z)=|z|^{2a}e^{\varphi\_\alpha([z])}$ となる。

## 主結果

### 無限遠接錐が一意でないKähler計量（Theorem 1.1）

任意の $n\ge2$ と $a\in(0,1)$ に対し、$\mathbb C^n$ 上に滑らかな完備Kähler計量 $g$ が存在し、

$$
\operatorname{Ric}(g)\ge0,\qquad
\operatorname{AVR}(g)=a^n
$$

を満たし、少なくとも二つの互いに非等長な無限遠接錐を持つ。ここで

$$
\operatorname{AVR}(g)=\lim\_{R\to\infty}\frac{\operatorname{Vol}\_gB\_g(0,R)}{v\_{2n}R^{2n}}
$$

であり、$v\_{2n}$ は実Euclid空間の単位球の体積である。複素次元2でも成立し、Introductionは構成例が二次の曲率減衰を持つことも述べる。

### 接錐集合全体の指定（Theorem 1.2）

$A\subset\mathcal P\_\kappa$ を空でないコンパクト連結集合とすると、滑らかな狭義多重劣調和関数 $U$ から $\omega=dd^cU$ を作り、

$$
\operatorname{Tan}\_\infty(\mathbb C^n,g,0)=\lbrace [C\_\alpha,o\_\alpha]:\alpha\in A\rbrace
$$

とできる。計量は原点近傍でEuclid計量の正の定数倍、十分外側でRicci曲率が正となる。全点・全半径で

$$
\operatorname{Vol}\_gB\_g(p,R)\ge a^n v\_{2n}R^{2n}
$$

も満たす。モデル錐間の基点付き実等長性は、論文で定める射影的な正則または反正則の同値性によって分類される。

定理は極限の尺度も明示する。集積集合が $A$ である滑らかな道 $\alpha(\tau)$ に対し、$r\_j\to\infty$ かつ

$$
\alpha\negthinspace \left(\log\frac{L+\log r\_j^2}{L}\right)\longrightarrow\alpha\_\infty,\qquad
\ell\_j=r\_j^a(L+\log r\_j^2)^{b/2}
$$

ならば、$(\mathbb C^n,\ell\_j^{-2}g,0)$ は $C\_{\alpha\_\infty}$ に基点付きGromov–Hausdorff収束する。Ricci形式も

$$
D\_{r\_j}^\ast \operatorname{Ric}(\omega)\rightharpoonup
dd^c\bigl(\kappa\log|z|^2+\psi\_{\alpha\_\infty}([z])\bigr)
$$

と全空間上のカレントとして収束する。ここで $D\_r(z)=rz$、$\alpha=\kappa\omega\_0+dd\_Y^c\psi\_\alpha$ であり、$\psi\_\alpha$ は平均零に正規化する。

## 証明の見取り図

指定された横断的形式の族を非常に遅くたどる道を選び、外側の領域でモデル錐のポテンシャルを変化させる。追加する対数因子が正の動径方向Ricci項を生み、横断的幾何を変えることで生じる混合項を制御する。

原点近傍は動径方向のMonge–Ampère方程式を通じて滑らかに埋める。横断的変化の開始を十分遅らせ、埋め合わせの誤差を曲率の余裕より小さくする。環状領域上の滑らかな収束に距離と体積の制御を組み合わせることで、候補となる錐が現れるだけでなく、すべてのblow-downを同定する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.32734)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.32734v1) — Section 1, pp. 2–4（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2、式 (1.1)–(1.3)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.32734v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
