---
layout: paper
title: "Stability of kernel bundles on projective bundles over curves"
title_ja: "曲線上の射影束に付随する核束の安定性"
authors: "Abel Castorena, George H. Hitching"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2608.06365v1"
arxiv_url: "https://arxiv.org/abs/2608.06365"
arxiv_submitted: "2026-08-06"
arxiv_updated: "2026-08-06"
summary: >-
  種数3以上の一般曲線上で、一般ベクトル束の射影束に付随する生成線形系の核束が安定となる十分条件を与える。階数・次数・切断空間の次元に明示的な不等式を課し、曲線の場合の Butler 予想から射影束の次元に関する帰納法で高次元へ進む結果である。
abstract_en: ""
summary_en: >-
  The paper studies kernel bundles arising from generating linear systems on projective bundles over curves. For a general curve, a general vector bundle of sufficiently large degree, and a general generating space of sections, it establishes stability with respect to the relative hyperplane polarization. The hypotheses are expressed by an explicit numerical bound involving the genus, the rank, and the dimension of the space of sections. The argument extends the general-curve case of Butler's conjecture through induction on the rank of the underlying bundle.
abstract_ja: >-
  種数 $g\ge 3$ の滑らかな曲線 $C$ 上の射影束 $X$ と相対超平面束 $\mathcal O_X(1)$ を考える。$V\subseteq H^0(X,\mathcal O_X(1))$ が生成部分空間であるとき、$C$、$X$、$V$ がモジュライで一般的で、$\mathcal O_X(1)$ が十分豊富ならば、線形系 $(\mathcal O_X(1),V)$ の核束は $\mathcal O_X(1)$ に関して安定であることを示す。
abstract_source_url: "https://arxiv.org/abs/2608.06365"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.06365v1](https://arxiv.org/abs/2608.06365)
- **著者:** Abel Castorena, George H. Hitching
- **初回投稿日:** 2026年8月6日
- **最終更新日:** 2026年8月6日
- **主分類・副分類:** math.AG（副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体 $X$ 上の大域生成線束 $L$ と、それを生成する切断の部分空間 $V\subseteq H^0(X,L)$ から、評価写像の核として核束（syzygy bundle）$M_{L,V}$ が定まる。固定した豊富線束 $A$ に関して $M_{L,V}$ が傾き安定かを決めることは基本的な問題であり、$X$ が曲線なら Butler 予想として知られている。

本論文は、種数 $g\ge 3$ の一般曲線 $C$ 上の一般ベクトル束 $E$ を取り、その射影束 $X=\mathbb P E^\vee$ 上でこの問題を扱う。線束は相対超平面束 $\mathcal O_X(1)$、切断空間は一般の生成部分空間 $V$ であり、$V$ は切断全体でなくてもよい。

主結果は、$E$ の階数 $r$、次数 $d$、$\dim V=n$ が明示的な下界を満たすなら、$M_{\mathcal O_X(1),V}$ が $\mathcal O_X(1)$ に関して安定となる、というものである。これは、曲線上の一般的な線形系に対して解決された Butler 予想を出発点に、射影束という高次元の状況へ安定性を拡張する。

新しい点は、$V=H^0(X,L)$ に限定しない高次元の結果を、射影束内部のより低階数の射影部分束への制限を通じて得ることにある。結論は一般のモジュライ点についての主張であり、任意の曲線・束・生成部分空間についての安定性を述べるものではない。

## 背景と問題設定

核束は完全列

$$
0\longrightarrow M_{L,V}\longrightarrow \mathcal O_X\otimes V
\longrightarrow L\longrightarrow 0
$$

で定義される。高次元では、曲面、Picard 数1の多様体、アーベル多様体、あるいは $h^0(X,L)$ が十分大きい場合などに $M_L$ の安定性が知られてきた。一方、$V$ が $H^0(X,L)$ の真部分空間でもよい場合の結果は比較的少なく、Introduction は射影空間の積に関する先行研究を挙げている。

曲線上の階数 $r$、次数 $d$ の束 $E$ に対して $X=\mathbb P E^\vee$ と置くと、射影 $\rho:X\to C$ と相対超平面束の間に

$$
\rho_*\mathcal O_X(1)\cong E,
\qquad
H^0(X,\mathcal O_X(1))\cong H^0(C,E)
$$

がある。この対応により、曲線上の生成 coherent system $(E,V)$ が、$X$ 上の生成線形系 $(\mathcal O_X(1),V)$ を与える。

## 主結果

### 主定理（Theorem A）

結論は、次の一般的なデータに対して核束 $M_{\mathcal O_X(1),V}$ が $\mathcal O_X(1)$-安定になることである。

種数 $g\ge 3$ でモジュライにおいて一般の曲線 $C$ を取り、整数 $r,n,d$ が

$$
n\ge r+1,
\qquad
d\ge (n+r-1)(g-1)+(n-1)
$$

を満たすとする。階数 $r$、次数 $d$ の一般ベクトル束 $E\to C$ と、一般の生成部分空間

$$
V\subseteq H^0\!\left(\mathbb P E^\vee,
\mathcal O_{\mathbb P E^\vee}(1)\right),
\qquad \dim V=n
$$

に対し、

$$
M_{\mathcal O_{\mathbb P E^\vee}(1),V}
\longrightarrow \mathbb P E^\vee
$$

は偏極 $\mathcal O_{\mathbb P E^\vee}(1)$ に関して安定である。

ここで「一般」の厳密な意味は、論文が後に構成する coherent system のモジュライ空間における一般点として与えられる。次数の下界は、単に「十分大きい」とするだけでなく、階数、種数、切断空間の次元を結ぶ具体的な条件になっている。

## 証明の見取り図

Introduction が示す証明の骨格は $r$ に関する帰納法である。$r=1$ の場合は、一般曲線と一般線形系に対する Butler 予想の既知の解決を用いる。

帰納段階では、射影束 $\mathbb P E^\vee\to C$ の中に、それ自身が曲線上の射影束となる因子を選ぶ。一般の切断を用いて $E$ から階数を一つ下げた商 coherent system を作り、それが対応するモジュライ空間でも一般になることを、関連するモジュライ空間の既約性と優越写像によって保証する。

次に核束をその射影部分束へ制限し、低階数で得られている安定性を利用する。Introduction によれば、先行研究に着想を得た制限の方法と既知の結果を組み合わせ、部分束上の解析から元の射影束上で安定性を結論する、という流れである。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.06365](https://arxiv.org/abs/2608.06365)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem A
- **論文構成の説明:** 帰納法と射影部分束への制限の概略、p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
