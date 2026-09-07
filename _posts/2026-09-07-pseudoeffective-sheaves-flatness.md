---
layout: paper
title: "A flatness criterion for pseudo-effective sheaves on compact Kähler spaces"
title_ja: "コンパクトKähler空間上の擬有効層に対する平坦性判定"
authors: "Junyan Cao, Ya Deng, Shin-ichi Matsumura"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  In this paper, we prove that if $E$ is a pseudo-effective sheaf with vanishing first Chern class on a klt compact Kähler space $X$, then, after passing to a finite quasi-étale cover, the reflexive pullback of $E$ is locally free and flat. This extends the flatness criterion of Höring--Peternell, originally established for projective varieties, to the Kähler setting. The proof relies on two main ingredients, both of which are new even in the projective case. The first is a flatness theorem for stable sheaves: we show that a slope-stable pseudo-effective sheaf with vanishing first Chern class is Hermitian flat. This is obtained by combining Hermitian--Einstein theory with the subharmonicity properties of direct image sheaves. The second is a singular Kähler analogue of Simpson's flatness theorem for extensions of locally free Hermitian flat sheaves.
topic: algebraic-geometry
tags:
  - singularities
  - positivity
  - vector-bundles-sheaves
  - stability
  - hermite-einstein-metrics
arxiv_id: "2609.05154v1"
arxiv_url: "https://arxiv.org/abs/2609.05154"
arxiv_submitted: "2026-09-04"
arxiv_updated: "2026-09-04"
summary: >-
  potentially kltなコンパクトKähler空間上で、第一Chern類が消える擬有効層は、有限準エタール被覆後に反射的引き戻しが局所自由かつ数値的平坦になることを示す。安定層に対するHermitian平坦性と、特異Kähler空間上の平坦束の拡大に関するSimpson型定理を組み合わせ、射影多様体で知られていた判定をKähler設定へ拡張する。
abstract_en: ""
summary_en: >-
  This work establishes a flatness criterion for pseudo-effective sheaves with trivial first Chern class on mildly singular compact Kähler spaces. After a suitable finite quasi-étale cover, the reflexive pullback becomes a numerically flat vector bundle, while the original reflexive hull is flat on the regular locus. The argument isolates a stable-sheaf theorem based on Hermitian--Einstein metrics and positivity of direct images, then uses a singular Kähler extension principle for flat bundles.
abstract_ja: >-
  kltコンパクトKähler空間 $X$ 上の擬有効層 $E$ の第一Chern類が消えるならば、有限準エタール被覆を取った後の反射的引き戻しは局所自由かつ平坦になる。これは射影多様体についてのHöring--Peternellの平坦性判定をKähler設定へ拡張する。証明の二つの新しい柱は、第一Chern類が消える勾配安定な擬有効層のHermitian平坦性と、局所自由なHermitian平坦層の拡大に対する特異Kähler版Simpson定理である。
abstract_source_url: "https://arxiv.org/abs/2609.05154"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.05154](https://arxiv.org/abs/2609.05154)
- **著者:** Junyan Cao, Ya Deng, Shin-ichi Matsumura
- **初回投稿日:** 2026年9月4日
- **最終更新日:** 2026年9月4日
- **主分類・副分類:** math.AG（主分類）, math.CV, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

半正曲率を持ち第一Chern類が消えるベクトル束から平坦部分を取り出すことは、複素幾何の構造定理を支える基本原理である。射影多様体ではViehweg型の正値性を用いた平坦性判定が知られていたが、特異点を持つコンパクトKähler空間の擬有効層へ移すには、局所自由性と平坦接続の降下が障害となる。

本論文は、potentially kltなコンパクトKähler空間 $X$ と、$c_1(E)=0$ を満たす擬有効層 $E$ を扱う。有限準エタール被覆 $\nu:X'\to X$ を取ると反射的引き戻し $\nu^{[*]}E$ が数値的平坦な局所自由層となり、元の $E^{**}$ も正則部分 $X_{\mathrm{reg}}$ 上で平坦になることを示す。

中心となる安定な場合の定理は、正規コンパクトKähler空間上の勾配安定な擬有効層で第一Chern類が消えれば、正則部分への制限がHermitian平坦になるというものである。第二Chern類の消滅を先に示す従来経路を避け、Hermitian--Einstein理論と直像層の劣調和性を結び付ける点が新しい。

さらに非Kählerなコンパクト複素多様体上でも、数値的平坦なベクトル束がHermitian平坦な商を持つ部分束のfiltrationを備え、全Chern類が消えることを証明する。Introductionは、klt pairに対するBeauville--Bogomolov--Yau分解のKähler版への応用を今後の研究として位置付けている。

## 背景と問題設定

擬有効性は、特異Hermitian計量を通じて層の弱い正値性を表す。本論文では $\mathbb P(E)$ 上の超平面束 $\mathcal O_{\mathbb P(E)}(1)$ に、曲率の下界が $-\varepsilon p^*\omega_X$ となる特異計量族を考える。問題は、この弱い正値性と $c_1(E)=0$ だけから、特異空間上で局所自由性と平坦性を導けるかという点にある。

Höring--Peternellの射影的結果では余次元2の滑らかさが仮定されていた。新しい判定はこの仮定を必要とせず、Kähler空間でのMMPや非負曲率を持つ空間の構造論に適用可能な形を目指す。

## 主結果

### 準エタール被覆後の平坦性（Theorem 1.1）

$X$ をpotentially klt特異点を持つコンパクトKähler空間、$E$ を $c_1(E)=0$ の擬有効層とする。このとき有限準エタール被覆 $\nu:X'\to X$ が存在し、

$$
\nu^{[*]}E:=(\nu^*E)^{**}
$$

は $X'$ 上の数値的平坦な局所自由層となる。また $E^{**}|_{X_{\mathrm{reg}}}$ は平坦な局所自由層である。射影性と余次元2での滑らかさを外し、特異Kähler設定で平坦性を確保する結果である。

### 安定な擬有効層のHermitian平坦性（Theorem 1.2）

$X$ を正規コンパクトKähler空間とし、$E$ が擬有効かつ $c_1(E)=0$ で、あるKähler類 $\omega$ に関して勾配安定であるとする。このとき

$$
E^{**}|_{X_{\mathrm{reg}}}
$$

はHermitian平坦である。ここでは $X$ にklt特異点を仮定しない。この安定商への結果をJordan--Hölder filtrationへ適用し、最大準エタール被覆上で局所自由に延長することがTheorem 1.1の骨格となる。

### 非Kähler多様体上の数値的平坦束（Theorem 1.3）

$X$ をコンパクト複素多様体、$E$ を数値的平坦な局所自由層、すなわち $c_1(E)=0$ かつ $\mathcal O_{\mathbb P(E)}(1)$ がnefであるものとする。このときholomorphic subbundleによるfiltration

$$
\{0\}=E_0\subset E_1\subset\cdots\subset E_k=E
$$

で、各商 $E_i/E_{i-1}$ がHermitian平坦となるものが存在する。特に全てのChern類 $c_k(E)$ が消える。

## 証明の見取り図

最大準エタール被覆を選び、反射的引き戻しの半安定性からJordan--Hölder filtrationを取る。filtrationの正則性を確保した後、各安定商へTheorem 1.2を適用してHermitian平坦性を得る。正則部分上の平坦束を空間全体へ延長し、特異設定に合わせたSimpsonの拡大定理で拡大の平坦性と接続の降下を処理する。

Theorem 1.2では、擬有効性から得る $\mathcal O_{\mathbb P(E)}(1)$ 上の特異計量の極限を調べる。極限計量の特異集合が底空間を支配しなければ、直像の $L^2$ 計量の半正曲率と $c_1(E)=0$ からHermitian平坦性が従う。支配する場合には乗数イデアルを含む直像部分層を構成し、その非負勾配が $E$ の安定性に反することを示して排除する。この方法は第二Chern類の消滅を経由しない。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.05154](https://arxiv.org/abs/2609.05154)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3; Propositions 2.7, 3.1, 3.2; Theorems 2.9, 4.5
- **論文構成の説明:** Introduction, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
