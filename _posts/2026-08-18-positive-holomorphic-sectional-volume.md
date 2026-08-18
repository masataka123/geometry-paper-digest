---
layout: paper
title: "Volume comparison and rigidity for positive holomorphic sectional curvature"
title_ja: "正の正則断面曲率に対する体積比較と剛性"
authors: "Ved Datar, Harish Seshadri"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove that the volume of a compact connected Kähler manifold with holomorphic sectional curvature at least 2 is bounded above by the volume of the Fubini-Study metric of constant holomorphic sectional curvature 2 on the complex projective space of the same dimension. Moreover equality holds if and only if the manifold is biholomorphically isometric to complex projective space. This answers a question posed by Xiong and Yang. Our approach also yields a different proof of Zhang's sharp volume estimate and Liu's rigidity theorem for compact Kähler manifolds with positive Ricci curvature. In fact, our main result states that the same sharp volume estimate holds under a new curvature positivity condition (mean RC curvature positivity), which is implied by both positive Ricci curvature and positive holomorphic sectional curvature. The definition of this condition was inspired by the work of Yang. The proofs in this paper are due to ChatGPT 5.6 Sol Pro, and the paper is merely an exposition of its output. The proofs has been verified by the authors and they take full responsibility for any errors.
topic: differential-geometry
tags:
  - curvature
  - positivity
  - fano-varieties
arxiv_id: "2608.15850v1"
arxiv_url: "https://arxiv.org/abs/2608.15850"
arxiv_submitted: "2026-08-16"
arxiv_updated: "2026-08-16"
summary: >-
  正則断面曲率が2以上のコンパクトKähler多様体の体積を、同次元のFubini--Study計量付き射影空間の体積で鋭く抑える。
  mean RC curvatureという共通条件を導入し、等号が射影空間との双正則等長に限る剛性まで証明する。
abstract_en: ""
summary_en: >-
  The paper proves a sharp Fubini--Study volume bound for compact Kähler manifolds under a lower bound on holomorphic sectional curvature. It introduces mean RC curvature as a condition that is implied by both the relevant Ricci and holomorphic sectional curvature bounds. Equality forces constant holomorphic sectional curvature in the latter setting and identifies the manifold biholomorphically and isometrically with projective space. The authors explicitly describe the paper as an exposition of AI-produced proofs that they report having checked and for which they accept responsibility.
abstract_ja: >-
  正則断面曲率が2以上のコンパクト連結Kähler多様体の体積は、同じ次元の複素射影空間上のFubini--Study計量の体積以下である。等号が成立するのは射影空間と双正則等長な場合に限る。証明は、Ricci曲率と正則断面曲率の双方から従うmean RC curvatureの正値性を介して体積評価を統一する。著者らは、証明がAI出力に由来する解説であり、自ら検証して誤りへの責任を負うと明記している。
abstract_source_url: "https://arxiv.org/abs/2608.15850"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.15850](https://arxiv.org/abs/2608.15850)
- **著者:** Ved Datar, Harish Seshadri
- **初回投稿日:** 2026年8月16日
- **最終更新日:** 2026年8月16日（v1）
- **主分類・副分類:** math.DG（主分類。副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲率の下界からコンパクト多様体の体積を鋭く評価する問題は、Riemann幾何のBishop定理を原型とする。Kähler多様体ではRicci下界に対する射影空間との比較が知られていたが、より弱い正則断面曲率の下界だけで同じ結論が成立するかは自明でなかった。

本論文は、正則断面曲率 $H_\omega\ge2$ のもとでもFubini--Study体積が最適上界となることを示す。正の正則断面曲率はRicci正値性を含意せず、対象がFanoとは限らないため、この評価は従来のRicci比較の形式的帰結ではない。

中心となる新概念はmean RC curvatureである。この曲率条件は適切に正規化したRicci下界と正則断面曲率下界の双方から従い、twisted cotensorの定量的消滅、線形系の切断数評価、漸近Riemann--Rochを経て体積上界を与える。

なお原論文は、証明がChatGPTによって生成され、著者が検証し責任を負う解説であると明示する。本記事はその主張の正しさを独立検証するものではなく、AbstractとIntroductionに記載された内容を紹介する。

## 背景と問題設定

$\mathbb{CP}^n$ 上のFubini--Study計量を $H_{\omega_{\rm FS}}\equiv2$ となるよう正規化すると、

$$
\operatorname{Vol}(\mathbb{CP}^n,\omega_{\rm FS})=\frac{(2\pi)^n}{n!}.
$$

Xiong--Yangは追加の共役半径条件のもとで正則断面曲率版の鋭い評価を得ていた。本論文はその追加条件を除く。

## 主結果

### mean RC curvatureによる体積評価（Theorem 1.1）

$(X,\omega)$ をコンパクト $n$ 次元Kähler多様体とし、各点でmean RC curvatureが

$$
\mu_{\rm RC}(x)\ge\frac{n+1}{n}
$$

を満たすとする。このとき

$$
\int_X\omega^n\le(2\pi)^n.
$$

等号なら複素スカラー曲率 $S_\omega$ の平均は $n(n+1)$ となる。

### 正則断面曲率・Ricci曲率の場合（Corollary 1.2）

$\operatorname{Ric}_\omega\ge(n+1)\omega$ または $H_\omega\ge2$ のいずれかを仮定すると、同じ体積上界が成立する。さらに等号成立は

$$
(X,\omega)\cong(\mathbb{CP}^n,\omega_{\rm FS})
$$

という双正則等長が存在する場合に限る。正則断面曲率の場合、等号から $H_\omega\equiv2$ が導かれる。

## 証明の見取り図

mean RC curvatureのminimax表示とRoyden不等式により、$H_\omega\ge2$ から必要な下界を得る。次に曲率上界を持つHermitian線束 $L$ に対し、twisted cotensorの定量的消滅定理を最大値原理で示す。

その消滅をPoincaré--Siegel型のjet countingへ入力して $h^0(X,L)$ を評価し、Kähler類を有理類で近似したうえで漸近Riemann--Rochを適用する。等号の場合はHilbert多項式の次係数から平均スカラー曲率を決め、Bergerの平均公式またはRicci等号条件を用いてFubini--Study剛性へ至る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.15850](https://arxiv.org/abs/2608.15850)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollary 1.2
- **論文構成の説明:** Section 1.2, pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
