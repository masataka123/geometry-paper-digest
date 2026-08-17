---
layout: paper
title: "Lefschetz principle-type theorems for curve semistable Higgs sheaves and applications to elliptic surfaces"
title_ja: "曲線半安定 Higgs 層の Lefschetz 原理型定理と楕円曲面への応用"
authors: "Armando Capasso"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - higgs-nonabelian-hodge
arxiv_id: "2412.00439v4"
arxiv_url: "https://arxiv.org/abs/2412.00439"
arxiv_submitted: "2024-11-30"
arxiv_updated: "2026-08-12"
summary: >-
  標数0の代数閉体上で、Higgs 層の傾き半安定性と曲線半安定性が基礎体拡大で保たれることを示し、H-nflat Higgs 束の Chern 類消滅予想を複素数体上へ帰着する。さらに複素 Jacobian 楕円曲面では、H-nflat locus の極限を冪零 Higgs 束へ落とし、その Higgs 場が消えることから予想を証明する。
abstract_en: ""
summary_en: >-
  The paper establishes base-change results for slope-semistable and curve-semistable Higgs sheaves on smooth projective varieties over algebraically closed fields of characteristic zero. These results reduce a Chern-class conjecture for curve-semistable Higgs bundles to the complex setting. For complex Jacobian elliptic surfaces, the author constructs an H-nflat locus in a moduli space and uses its limiting behavior to reduce the problem to nilpotent H-nflat Higgs bundles. The Higgs fields of those limiting bundles are shown to vanish, yielding the conjectured Chern-class triviality in this case.
abstract_ja: >-
  滑らかな射影多様体上の傾き半安定 Higgs 層および曲線半安定 Higgs 層について、標数0の代数閉体の間の基礎体拡大に対する Lefschetz 原理型の結果を証明する。これにより、曲線半安定 Higgs 束に関する判別類消滅予想を複素数体の場合へ帰着する。複素 Jacobian 楕円曲面上では、H-nflat Higgs 束が定めるモジュライ内の集合を自然な作用の下で調べ、極限に冪零な H-nflat Higgs 束が現れることを示す。その Higgs 場が消えることから、この曲面クラスについて H-nflat Higgs 束の Chern 類消滅を得る。
abstract_source_url: "https://arxiv.org/abs/2412.00439"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2412.00439](https://arxiv.org/abs/2412.00439)
- **著者:** Armando Capasso
- **初回投稿日:** 2024年11月30日
- **最終更新日:** 2026年8月12日（v4）
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな射影多様体上の Higgs 束を曲線から引き戻すと、その半安定性は多様体上の全ての偏極に依存しない強い条件を与える。本論文はまず、この曲線半安定性と通常の傾き半安定性が、標数0の代数閉体の間で基礎体を変えても保たれることを証明する。

中心にある Bruzzo–Graña Otero の予想は、階数 $r\geq2$ の曲線半安定 Higgs 束 $E=(E,\varphi)$ に対して判別類

$$
\frac{1}{2r}c_2(E\otimes E^\vee)
$$

が消えるという主張である。基礎体拡大の定理により、この予想を一般の標数0代数閉体から複素数体上の問題へ帰着できる。

別の表示では、この予想は H-nflat（Higgs-numerically flat）Higgs 束の全 Chern 類が自明であることと同値である。著者は複素 Jacobian 楕円曲面に対象を絞り、H-nflat Higgs 束の Jordan–Hölder 同値類がモジュライ空間内に定める H-nflat locus と、Higgs 場をスカラー倍する $\mathbb C^\times$ 作用を調べる。

この locus が作用で保たれ、極限が冪零かつ H-nflat になることを示したうえで、Jacobian 楕円曲面上ではそのような束の Higgs 場自体が消えることを証明する。したがって同曲面上で Chern 類消滅予想が成立する。v4 は新しい節と付録を加え、誤りを修正した更新版である。

## 背景と問題設定

$X$ を標数0の代数閉体 $K$ 上の滑らかな射影多様体とする。Higgs 層 $E=(E,\varphi)$ の曲線半安定性とは、任意の滑らかな射影曲線からの射 $f:C\to X$ に対し、引き戻し $f^*E$ が傾き半安定になることである。これは一つの偏極に関する傾き半安定性より強く、H-nflat Higgs 束と Chern 類消滅問題を結びつける。

Introduction が列挙する既知の場合には、$\varphi=0$、階数2、$X$ の接束が nef、特定の Kodaira 次元をもつ曲面、単連結 Calabi–Yau 多様体などがある。一般の場合への障害の一つは、曲線半安定性を任意の標数0代数閉体と $\mathbb C$ の間で正確に移す必要があることであり、もう一つは H-nflat Higgs 束が傾き半安定ではあっても Gieseker 半安定かどうかが未解決で、通常のモジュライ空間上の議論をそのまま適用できないことである。

## 主結果

### 基礎体拡大と複素数体への帰着（Theorem 2.7, Lemma 2.9, Corollary 2.10）

結論は、Higgs 層の傾き半安定性と曲線半安定性が標数0代数閉体の任意の基礎体拡大で保たれることである。したがって、曲線半安定 Higgs 束の判別類消滅予想が滑らかな複素射影多様体すべてで成立すれば、任意の標数0代数閉体上でも成立する。

この結果のために著者は、固定した Higgs 層の Higgs 商を分類する Higgs–Quot scheme と、安定写像のスタック上の Higgs–Quot stack を導入する。前者が傾き半安定性、後者が曲線からの全ての引き戻しを同時に扱う曲線半安定性の基礎体拡大を支える。

### Jacobian 楕円曲面での Chern 類消滅（Theorem 4.20）

複素 Jacobian 楕円曲面、すなわち基底曲線への射が切断をもち、滑らかで極小な複素射影曲面の上では、H-nflat Higgs 束の Chern 類は自明になる。従って Bruzzo–Graña Otero の予想はこの曲面クラスで成立する。

Introductionでは概略として次のように述べられている。H-nflat locus が $\mathbb C^\times$ 作用で集合として保たれ、その極限に冪零 H-nflat Higgs 束が現れる（Proposition 3.6, Corollary 3.7）。さらに Jacobian 楕円曲面では冪零 H-nflat Higgs 束の Higgs 場が消える（Lemma 4.23）。これらを組み合わせることで、問題が Higgs 場ゼロの既知の場合へ帰着される。

## 証明の見取り図

傾き半安定性については、Higgs 商を表現する射影的な Higgs–Quot scheme を構成し、それが基礎体拡大と可換であることを使う。曲線半安定性では曲線の写像そのものも動くため、安定写像のモジュライスタック上に Higgs–Quot stack を置き、基礎体拡大後に現れる不安定な引き戻しを元の体側へ移す。

楕円曲面への応用では、階数についての帰納法で H-nflat locus の well-definedness と $\mathbb C^\times$ 不変性を同時に確立する。作用の極限で Higgs 場を冪零化し、最後に射影直線上のベクトル束に関する Grothendieck の結果と楕円曲線上の Atiyah の結果を用いて、Jacobian 楕円曲面上の冪零 H-nflat Higgs 場がゼロであることを導く。

## 原論文との対応
- **Abstractページ:** [arXiv:2412.00439](https://arxiv.org/abs/2412.00439)
- **Introduction:** pp. 2–4
- **Introduction中で言及された主要定理番号:** Theorem 2.7, Theorem 4.20; Lemma 2.9, Lemma 4.23; Corollary 2.10, Corollary 3.7; Proposition 3.6
- **論文構成の説明:** pp. 3–4
- **確認したarXivバージョン:** v4
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
